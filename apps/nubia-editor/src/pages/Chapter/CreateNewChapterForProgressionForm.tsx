import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import ChapterModel from '../../models/Chapter.model';
import ProgressionModel from '../../models/Progression.model';
import ProgressionRollGuardSubForm from './ProgressionRollGuardSubForm';
import { createChapter } from '../../actions/chapter.actions';
import { createProgression } from '../../actions/progression.actions';
import DebugPrintObject from '../../core-components/DebugPrintObject';

interface CreateNewChapterForProgressionFormProps {
  createChapter: typeof createChapter;
  createProgression: typeof createProgression;
  gamebookId: string;
  sourceChapterId: string;
}

const CreateNewChapterForProgressionForm = (
  props: CreateNewChapterForProgressionFormProps
) => {
  const initialValue: {
    title: string;
    descriptor: string;
    rollGuard: boolean;
    rollType: string;
    rollValue: number;
  } = {
    title: '',
    descriptor: '',
    rollGuard: false,
    rollType: '',
    rollValue: 0,
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        descriptor: Yup.string().required('Required'),
        rollGuard: Yup.boolean(),
        rollType: Yup.string(),
        rollValue: Yup.number(),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        if (!values.title || !values.descriptor) {
          // eslint-disable-next-line no-console
          console.error('Required fields not present');
          return;
        }

        const formChapter: Partial<ChapterModel> = {
          title: values.title,
          gamebookId: props.gamebookId,
        };

        const newChapter: ChapterModel = await props.createChapter(formChapter);

        const newProgression: Partial<ProgressionModel> = {
          gamebookId: props.gamebookId,
          sourceChapterId: props.sourceChapterId,
          destinationChapterId: newChapter.id,
          descriptor: values.descriptor,
          rollGuard: values.rollGuard,
        };

        await props.createProgression(newProgression);

        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className="mt-4">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Go to a new Chapter
              </Typography>
              <div className="space-y-4 flex flex-col">
                <Field
                  component={TextField}
                  id="descriptor"
                  name="descriptor"
                  label="Descriptor"
                  variant="outlined"
                />

                <Field
                  component={TextField}
                  id="title"
                  name="title"
                  label="Title"
                  variant="outlined"
                />

                <ProgressionRollGuardSubForm
                  formik={formik}
                ></ProgressionRollGuardSubForm>
              </div>
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
          <DebugPrintObject>{formik}</DebugPrintObject>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewChapterForProgressionForm;
