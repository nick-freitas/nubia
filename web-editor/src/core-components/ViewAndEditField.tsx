import Button from '@material-ui/core/Button';
import { Form, Formik, Field } from 'formik';

interface ViewAndEditFieldProps {
  component: any;
  editCondition: boolean;
  initialValues: any;
  name: string;
  viewComponent: any;
  viewTextClassName?: string;
  validationSchema: any;
  updateAction: (values: any) => any;
  disableEditingState: () => any;
  [x: string]: any;
}

function ViewAndEditField(props: ViewAndEditFieldProps) {
  return (
    <>
      {props.editCondition ? (
        <Formik
          initialValues={props.initialValues}
          onSubmit={(values) => {
            props.updateAction(values);
            props.disableEditingState();
          }}
          validationSchema={props.validationSchema}
        >
          {() => (
            <Form>
              <Field
                component={props.component}
                variant={props.variant}
                name={props.name}
                label={props.label}
              ></Field>
              <div className="space-x-1 flex mt-2">
                <Button size="small" color="primary" type="submit">
                  Save
                </Button>
                <Button
                  size="small"
                  type="reset"
                  onClick={props.disableEditingState}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div onClick={props.enableEditingState}>{props.viewComponent}</div>
      )}
    </>
  );
}

export default ViewAndEditField;
