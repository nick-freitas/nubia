import { Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';

const ProgressionRollGuardSubForm = ({ formik }: { formik: any }) => (
  <div className="flex items-center">
    <Field
      component={CheckboxWithLabel}
      type="checkbox"
      name="rollGuard"
      Label={{ label: 'Skill Check' }}
    />
    <Field
      component={TextField}
      label="Type"
      name="rollType"
      variant="outlined"
      disabled={!formik.values.rollGuard}
    />
    <Field
      component={TextField}
      label="Value"
      name="rollValue"
      variant="outlined"
      type="number"
      disabled={!formik.values.rollGuard}
    />
  </div>
);

export default ProgressionRollGuardSubForm;
