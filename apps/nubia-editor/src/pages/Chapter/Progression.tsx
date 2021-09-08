import * as Yup from 'yup';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from '@material-ui/core';
import {
  IDestroyProgression,
  IUpdateProgression,
} from '../../actions/progression.actions';
import ChapterModel from '../../models/Chapter.model';
import ProgressionModel from '../../models/Progression.model';
import ViewAndEditField from '../../core-components/ViewAndEditField';
import ProgressionDcCheckViewEdit from './ProgressionDcCheckViewEdit';

interface ProgressionProp {
  chapters: ChapterModel[];
  progression: ProgressionModel;
  nextChapterId: string;
  destroyProgression: IDestroyProgression;
  updateProgression: IUpdateProgression;
}

const Progression = (props: ProgressionProp) => {
  const [state, setState] = useState({
    rollValue: 0,
    rollType: '',
    rollGuard: false,
    editingDescriptor: false,
    changeExists: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      rollGuard: props.progression.rollGuard || false,
      rollValue: props.progression.rollValue || 0,
      rollType: props.progression.rollType || '',
    }));
  }, [props.progression]);

  const enableEditingDescriptor = () =>
    setState((prevState) => ({
      ...prevState,
      editingDescriptor: true,
    }));

  const disableEditingDescriptor = () =>
    setState((prevState) => ({
      ...prevState,
      editingDescriptor: false,
    }));

  return (
    <div className="flex flex-col">
      <div className="flex space-x-1 justify-between items-center">
        <div className="flex items-center">
          <DeleteOutlineIcon
            className="cursor-pointer"
            onClick={() => props.destroyProgression(props.progression.id)}
          ></DeleteOutlineIcon>
          <ViewAndEditField
            editCondition={state.editingDescriptor}
            viewComponent={<p>{props.progression.descriptor}</p>}
            initialValues={{ descriptor: props.progression.descriptor }}
            validationSchema={Yup.object({
              descriptor: Yup.string().required('Descriptor Required'),
            })}
            updateAction={(values: any) =>
              props.updateProgression({
                id: props.progression.id,
                descriptor: values.descriptor,
              })
            }
            name="descriptor"
            component={TextField}
            variant="outlined"
            label="Descriptor"
            disableEditingState={disableEditingDescriptor}
            enableEditingState={enableEditingDescriptor}
          ></ViewAndEditField>
        </div>
        <Button className="pl-4" variant="outlined" color="primary">
          <Link
            to={`/gamebooks/${props.progression.gamebookId}/edit-chapter/${props.nextChapterId}`}
          >
            {props?.chapters?.find(
              (chapter: ChapterModel) => chapter.id === props.nextChapterId
            )?.title || 'Unknown'}
          </Link>
        </Button>

        <ProgressionDcCheckViewEdit
          progression={props.progression}
          updateProgression={props.updateProgression}
        ></ProgressionDcCheckViewEdit>
      </div>

      {/* <DebugPrintObject>{props.progression}</DebugPrintObject> */}
    </div>
  );
};

export default Progression;
