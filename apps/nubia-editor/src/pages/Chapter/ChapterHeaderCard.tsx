import { useEffect, useState } from 'react';
import { OutputData } from '@editorjs/editorjs';
import EditorJs from 'react-editor-js';
import * as Yup from 'yup';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import { TextField } from 'formik-material-ui';
import EDITOR_JS_TOOLS from '../../editor-tools';
// import { Editor } from '@tinymce/tinymce-react';
import { IUpdateChapter } from '../../actions/chapter.actions';
import ChapterModel from '../../models/Chapter.model';
import ViewAndEditField from '../../core-components/ViewAndEditField';

interface ChapterHeaderCardProps {
  updateChapter: IUpdateChapter;
  chapter: ChapterModel;
}

interface State {
  title: string;
  content: OutputData | undefined;
  editingTitle: boolean;
  editingContent: boolean;
}

const initialContent: OutputData = {
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2,
      },
    },
  ],
};

// todo: bug - when revisiting the page, chapter.content is not reloaded.
const ChapterHeaderCard = (props: ChapterHeaderCardProps) => {
  const [state, setState] = useState<State>({
    title: '',
    content: initialContent,
    editingTitle: false,
    editingContent: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      title: props.chapter.title,
      content: {
        blocks: [
          {
            type: 'header',
            data: {
              text: props.chapter.content,
              level: 2,
            },
          },
        ],
      },
    }));
  }, [props.chapter]);

  const saveChapter = async (values: any) => {
    const updatedChapter: ChapterModel = await props.updateChapter(
      props.chapter.id,
      { ...values }
    );

    setState((prevState) => ({
      ...prevState,
      title: updatedChapter.title,
      // content: updatedChapter.content,
      editingTitle: values.title ? false : values.title,
      editingContent: values.content ? false : values.content,
    }));
  };

  const saveContent = () => {
    saveChapter({ content: state.content });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateContentInState = (content: any) => {
    setState((prevState) => ({ ...prevState, content }));
  };

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

  const enableEditingContent = () =>
    setState((prevState) => ({
      ...prevState,
      editingContent: true,
    }));

  const disableEditingContent = () =>
    setState((prevState) => ({
      ...prevState,
      editingContent: false,
    }));

  let editorInstance: any;

  const handleSave = (api: any) => {
    // eslint-disable-next-line no-console
    console.log(editorInstance);
    // eslint-disable-next-line no-console
    console.log(api);
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <ViewAndEditField
            component={TextField}
            variant="outlined"
            disableEditingState={disableEditingTitle}
            enableEditingState={enableEditingTitle}
            editCondition={state.editingTitle}
            name="title"
            label="Title"
            initialValues={{ title: props.chapter.title }}
            updateAction={(values: any) =>
              props.updateChapter(props.chapter.id, {
                title: values.title,
              })
            }
            viewComponent={props.chapter.title}
            viewTextClassName="text-2xl text-gray-700 font-bold cursor-pointer"
            validationSchema={Yup.object({
              title: Yup.string().required('Title is required'),
            })}
          ></ViewAndEditField>
        </Typography>

        {!state.editingContent ? (
          // View Content

          <div className="flex">
            <div className="cursor-pointer" onClick={enableEditingContent}>
              <div className="ck-content">
                {ReactHtmlParser(
                  props?.chapter?.content || 'Click Here to Start Typing...'
                )}
              </div>
            </div>
          </div>
        ) : (
          // Edit Content
          <div>
            <EditorJs
              data={state.content}
              tools={EDITOR_JS_TOOLS}
              instanceRef={(instance) => {
                editorInstance = instance;
              }}
              onChange={handleSave}
            />
            ;
            {/* <Editor
              apiKey="1iwahyfhr98fcf6bc2bdc9k5ccmrcrjxb5suyv9now67yzw5"
              init={{
                height: 500,
                // menubar: false,
                // skin: 'snow',
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste imagetools wordcount',
                ],
              }}
              value={state.content}
              onEditorChange={updateContentInState}
            /> */}
            <div className="flex space-x-1 mt-2">
              <Button size="small" color="primary" onClick={saveContent}>
                Save
              </Button>
              <Button size="small" onClick={disableEditingContent}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChapterHeaderCard;
