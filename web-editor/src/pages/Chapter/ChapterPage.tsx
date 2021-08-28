import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import ChapterModel from '../../models/Chapter.model';
import NewProgressionToAnExistingChapterForm from './NewProgressionToAnExistingChapterForm';
import ChapterHeaderCard from './ChapterHeaderCard';
import ProgressionList from './ProgressionList';
import CreateNewChapterForProgressionForm from './CreateNewChapterForProgressionForm';
import ProgressionModel from '../../models/Progression.model';
import GamebookModel from '../../models/Gamebook.model';
import {
  ICreateChapter,
  IFetchChapter,
  IUpdateChapter,
  IFetchChapters,
  fetchChapter,
  createChapter,
  updateChapter,
  fetchChapters,
} from '../../actions/chapter.actions';
import {
  ICreateProgression,
  IFetchProgressionsByGamebookId,
  IDestroyProgression,
  IUpdateProgression,
  fetchProgressionsByGamebookId,
  createProgression,
  destroyProgression,
  updateProgression,
} from '../../actions/progression.actions';
import { IFetchGamebook, fetchGamebook } from '../../actions/gamebook.actions';

interface ChapterPageProps
  extends RouteComponentProps<{ gamebookId: string; chapterId: string }> {
  fetchChapters: IFetchChapters;
  fetchChapter: IFetchChapter;
  fetchProgressionsByGamebookId: IFetchProgressionsByGamebookId;
  createChapter: ICreateChapter;
  createProgression: ICreateProgression;
  updateChapter: IUpdateChapter;
  destroyProgression: IDestroyProgression;
  updateProgression: IUpdateProgression;
  fetchGamebook: IFetchGamebook;
  chapter: ChapterModel;
  chapters: ChapterModel[];
  progressions: ProgressionModel[];
  gamebook: GamebookModel;
}

const mapStateToProps = (state: any) => ({
  chapter: state.chapters.selectedChapter,
  chapters: state.chapters.chapters,
  progressions: state.progressions.progressions,
  gamebook: state.gamebooks.selectedGamebook,
});

const ChapterPage = connect(mapStateToProps, {
  fetchGamebook,
  fetchChapters,
  fetchChapter,
  fetchProgressionsByGamebookId,
  createChapter,
  createProgression,
  updateChapter,
  destroyProgression,
  updateProgression,
})((props: ChapterPageProps) => {
  useEffect(() => {
    props.fetchChapters(Number(props.match.params.gamebookId));
    props.fetchChapter(Number(props.match.params.chapterId));
    props.fetchProgressionsByGamebookId(Number(props.match.params.gamebookId));
    props.fetchGamebook(Number(props.match.params.gamebookId));
  }, [props.match.params]);

  return (
    <>
      <div className="mb-2">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Gamebooks
          </Link>

          <Link color="inherit" to={`/gamebooks/${props.gamebook?.id}`}>
            {props.gamebook?.title}
          </Link>

          <Typography color="textPrimary">{props.chapter?.title}</Typography>
        </Breadcrumbs>
      </div>

      {props?.chapter && (
        <>
          <ChapterHeaderCard
            chapter={props.chapter}
            updateChapter={props.updateChapter}
          ></ChapterHeaderCard>

          <div className="mt-4">
            <ProgressionList
              goToProgressions={props.progressions.filter(
                (p) => p.sourceChapterId === props.chapter.id
              )}
              getToProgressions={props.progressions.filter(
                (p) => p.destinationChapterId === props.chapter.id
              )}
              chapters={props.chapters}
              destroyProgression={props.destroyProgression}
              updateProgression={props.updateProgression}
            ></ProgressionList>
          </div>

          {/* Create New Chapter */}
          <div className="flex space-x-2 mt-4">
            <div className="flex-1">
              <NewProgressionToAnExistingChapterForm
                gamebookId={props.chapter.gamebookId}
                chapterId={props.chapter.id}
                headerText="Go to an Existing Chapter"
                isGetHereFrom={false}
              ></NewProgressionToAnExistingChapterForm>
            </div>
            <div className="flex-1">
              <NewProgressionToAnExistingChapterForm
                gamebookId={props.chapter.gamebookId}
                chapterId={props.chapter.id}
                headerText="Get Here From an Existing Chapter"
                isGetHereFrom={true}
              ></NewProgressionToAnExistingChapterForm>
            </div>
          </div>
          <div className="">
            <CreateNewChapterForProgressionForm
              gamebookId={props.chapter.gamebookId}
              sourceChapterId={props.chapter.id}
              createChapter={props.createChapter}
              createProgression={props.createProgression}
            ></CreateNewChapterForProgressionForm>
          </div>
        </>
      )}
    </>
  );
});

export default ChapterPage;
