import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { updateGamebook } from '../../actions/gamebook.actions';
import GamebookModel from '../../models/Gamebook.model';
import ViewAndEditField from '../../core-components/ViewAndEditField';

interface GamebookHeaderProps {
  gamebook: GamebookModel;
  updateGamebook: typeof updateGamebook;
}

function GamebookHeader(props: GamebookHeaderProps) {
  const [state, setState] = useState({
    editingTitle: false,
    editingDescription: false,
  });

  const enableEditingTitle = () =>
    setState((prevState) => ({
      ...prevState,
      editingTitle: true,
    }));

  const disableEditingTitle = () =>
    setState((prevState) => ({
      ...prevState,
      editingTitle: false,
    }));

  const enableEditingDescription = () =>
    setState((prevState) => ({
      ...prevState,
      editingDescription: true,
    }));

  const disableEditingDescription = () =>
    setState((prevState) => ({
      ...prevState,
      editingDescription: false,
    }));

  return (
    <Card>
      <CardContent>
        <div className="">
          <Typography gutterBottom variant="h5" component="h2">
            <ViewAndEditField
              component={TextField}
              disableEditingState={disableEditingTitle}
              enableEditingState={enableEditingTitle}
              editCondition={state.editingTitle}
              name="title"
              initialValues={{ title: props.gamebook.title }}
              updateAction={(values: any) =>
                props.updateGamebook({
                  id: props.gamebook.id,
                  title: values.title,
                })
              }
              viewComponent={props.gamebook.title}
              validationSchema={Yup.object({
                title: Yup.string().required('Book name is required'),
              })}
            ></ViewAndEditField>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <ViewAndEditField
              component={TextField}
              multiline
              line={4}
              disableEditingState={disableEditingDescription}
              enableEditingState={enableEditingDescription}
              editCondition={state.editingDescription}
              name="description"
              initialValues={{ description: props.gamebook.description }}
              updateAction={(values: any) =>
                props.updateGamebook({
                  id: props.gamebook.id,
                  description: values.description,
                })
              }
              viewComponent={props.gamebook.description}
              validationSchema={Yup.object({
                description: Yup.string().required('Description is required'),
              })}
            ></ViewAndEditField>
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Link to={`/read-gamebooks/${props?.gamebook.id}`}>
          <Button size="small" color="primary">
            Read Adventure
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default GamebookHeader;
