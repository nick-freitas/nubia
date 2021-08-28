import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { useState } from 'react';
import { IUpdateProgression } from '../../actions/progression.actions';
// import DebugPrintObject from '../../core-components/DebugPrintObject';
import ProgressionModel from '../../models/Progression.model';

interface ProgressionDcCheckViewEditProps {
  progression: ProgressionModel;
  updateProgression: IUpdateProgression;
}

function ProgressionDcCheckViewEdit(props: ProgressionDcCheckViewEditProps) {
  const [state] = useState({
    rollGuard: false,
    value: 0,
    type: '',
  });

  const initialValue: {
    rollGuard: boolean;
    rollType: string | null;
    rollValue: number | null;
  } = {
    rollGuard: props.progression.rollGuard,
    rollType: props.progression.rollType,
    rollValue: props.progression.rollValue,
  };

  return (
    <div className="bg-gray-100 px-6 py-2">
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => {
          const progression: Partial<ProgressionModel> = {
            ...values,
            id: props.progression.id,
            rollGuard: state.rollGuard,
          };

          props.updateProgression(progression);
        }}
      >
        {() => (
          <Form className="flex flex-col">
            <div>
              <Field
                component={CheckboxWithLabel}
                type="checkbox"
                name="rollGuard"
                Label={{ label: 'Skill Check' }}
              />
            </div>
            <div>
              <Field
                component={TextField}
                name="rollType"
                type="text"
                label="Type"
                variant="outlined"
              ></Field>

              <Field
                component={TextField}
                name="rollValue"
                type="text"
                label="Value"
                variant="outlined"
              ></Field>
            </div>
            <div>
              <Button size="small" color="primary" type="submit">
                Save
              </Button>
              <Button size="small" type="reset">
                Cancel
              </Button>
            </div>
            {/* <DebugPrintObject>{formik}</DebugPrintObject> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProgressionDcCheckViewEdit;
