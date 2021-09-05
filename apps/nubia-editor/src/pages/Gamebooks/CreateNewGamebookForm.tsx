import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { ICreateNewGamebook } from '../../actions/gamebook.actions';
import GamebookModel from '../../models/Gamebook.model';

interface CreateNewGamebookFormProps {
  createNewGamebook: ICreateNewGamebook;
}

const CreateNewGamebookForm = (props: CreateNewGamebookFormProps) => {
  const initialValue: {
    title?: string;
    description?: string;
  } = {};
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const newGamebook: Partial<GamebookModel> = {
          title: values.title,
          description: values.description,
        };

        props.createNewGamebook(newGamebook);
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => (
        <Form>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Create New Module
              </Typography>

              <div className="flex flex-col space-y-4">
                <Field
                  component={TextField}
                  label="Title"
                  name="title"
                  variant="outlined"
                />

                <Field
                  component={TextField}
                  multiline
                  rows={4}
                  label="Description"
                  name="description"
                  variant="outlined"
                />
                {/* <DebugPrintObject>{formik}</DebugPrintObject> */}
              </div>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  type="submit"
                  disabled={
                    !(formik.isValid && formik.dirty && !formik.isSubmitting)
                  }
                >
                  {formik.isSubmitting ? 'Creating' : 'Create'}
                </Button>
                <Button
                  size="small"
                  disabled={formik.isSubmitting}
                  type="reset"
                >
                  Cancel
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Form>
      )}
    </Formik>
  );
};
export default CreateNewGamebookForm;
