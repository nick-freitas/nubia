import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Button,
} from '@material-ui/core';
import { Select, TextField } from 'formik-material-ui';
import ChapterModel from '../../models/Chapter.model';
import ProgressionModel from '../../models/Progression.model';
import ProgressionRollGuardSubForm from './ProgressionRollGuardSubForm';
import { createProgression } from '../../actions/progression.actions';
import DebugPrintObject from '../../core-components/DebugPrintObject';

interface NewProgressionToAnExistingChapterFormProps {
  gamebookId: number;
  chapterId: number;
  chapters: ChapterModel[];
  createProgression?: (chapter: Partial<ChapterModel>) => any;
  headerText: string;
  isGetHereFrom: boolean;
}

const mapStateToProps = (state: any) => ({
  chapters: state.chapters.chapters,
});

const initialValue: {
  chapter?: number;
  descriptor: string;
  rollGuard: boolean;
  rollType: string;
  rollValue: number;
} = {
  descriptor: '',
  rollGuard: false,
  rollType: '',
  rollValue: 0,
};

const NewProgressionToAnExistingChapterForm = connect(mapStateToProps, {
  createProgression,
})((props: NewProgressionToAnExistingChapterFormProps) => (
  <Formik
    initialValues={initialValue}
    validationSchema={Yup.object({
      chapter: Yup.number().required('Required').min(1, 'Select a chapter'),
      descriptor: Yup.string().required('Required'),
    })}
    onSubmit={async (values, { setSubmitting, resetForm }) => {
      const newProgression: Partial<ProgressionModel> = {
        gamebookId: props.gamebookId,
        sourceChapterId: props.isGetHereFrom
          ? Number(values.chapter)
          : props.chapterId,
        destinationChapterId: props.isGetHereFrom
          ? props.chapterId
          : Number(values.chapter),
        descriptor: values.descriptor,
        rollGuard: !!values.rollGuard,
        rollType: values.rollType,
        rollValue: values.rollValue,
      };

      await props.createProgression?.(newProgression);

      setSubmitting(false);
      resetForm();
    }}
  >
    {(formik) => (
      <Form>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.headerText}
            </Typography>

            <div className="flex flex-col space-y-4">
              {/* Bug: The notch does not appear when the label goes up */}

              <Field
                component={TextField}
                label="Progression Description"
                name="descriptor"
                id="descriptor"
                variant="outlined"
              />

              <FormControl variant="outlined">
                <InputLabel htmlFor="chapter">Chapter Title</InputLabel>
                <Field
                  component={Select}
                  name="chapter"
                  inputProps={{
                    id: 'chapter',
                  }}
                >
                  {props?.chapters
                    .filter((c) => c.id !== props.chapterId)
                    .map((chapter) => (
                      <MenuItem key={chapter.id} value={chapter.id}>
                        {chapter.title}
                      </MenuItem>
                    ))}
                </Field>
              </FormControl>

              <ProgressionRollGuardSubForm
                formik={formik}
              ></ProgressionRollGuardSubForm>
            </div>

            <DebugPrintObject>{formik}</DebugPrintObject>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              type="submit"
              disabled={
                !(formik.isValid && formik.dirty && !formik.isSubmitting)
              }
            >
              {formik.isSubmitting ? 'Creating...' : 'Create'}
            </Button>
            <Button size="small" type="reset" disabled={formik.isSubmitting}>
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    )}
  </Formik>
));

export default NewProgressionToAnExistingChapterForm;
