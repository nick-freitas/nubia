import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import {
  fetchGamebook,
  IFetchGamebook,
  IUpdateGamebook,
  updateGamebook,
} from '../../actions/gamebook.actions';
import {
  fetchChapters,
  destroyChapter,
  updateChapter,
  IFetchChapters,
  IDestroyChapter,
  IUpdateChapter,
} from '../../actions/chapter.actions';
import {
  fetchProgressionsByGamebookId,
  IFetchProgressionsByGamebookId,
} from '../../actions/progression.actions';
import GamebookModel from '../../models/Gamebook.model';
import ChapterList from './ChapterList';
import ProgressionGraph from './ProgressionGraph';
import ChapterModel from '../../models/Chapter.model';
import GamebookHeader from './GamebookHeader';
import ProgressionModel from '../../models/Progression.model';

interface GamebookPageProps extends RouteComponentProps<{ id: string }> {
  fetchGamebook: IFetchGamebook;
  fetchChapters: IFetchChapters;
  destroyChapter: IDestroyChapter;
  updateChapter: IUpdateChapter;
  updateGamebook: IUpdateGamebook;
  fetchProgressionsByGamebookId: IFetchProgressionsByGamebookId;
  gamebook: GamebookModel;
  chapters: ChapterModel[];
  progressions: ProgressionModel[];
}

const mapStateToProps = (state: any) => ({
  gamebook: state.gamebooks.selectedGamebook,
  chapters: state.chapters.chapters,
  progressions: state.progressions.progressions,
});

const GamebookPage = connect(mapStateToProps, {
  fetchGamebook,
  fetchChapters,
  destroyChapter,
  updateChapter,
  updateGamebook,
  fetchProgressionsByGamebookId,
})((props: GamebookPageProps) => {
  useEffect(() => {
    const gamebookId = Number(props.match.params.id);
    props.fetchGamebook(gamebookId);
    props.fetchChapters(gamebookId);
  }, [props.match.params]);

  return (
    <>
      <div className="mb-2">
        <Breadcrumbs aria-label="breadcrumb" className="mb-4">
          <Link color="inherit" to="/">
            Gamebooks
          </Link>

          <Typography color="textPrimary">{props.gamebook?.title}</Typography>
        </Breadcrumbs>
      </div>

      {props?.gamebook && (
        <>
          {/* header card */}
          <GamebookHeader
            gamebook={props.gamebook}
            updateGamebook={props.updateGamebook}
          ></GamebookHeader>
          {/* Chapters */}
          <div className="mt-8 flex flex-col">
            <span className="text-2xl">Chapters</span>
            <ChapterList
              gamebookId={props.gamebook.id}
              chapters={props.chapters}
              destroyChapter={props.destroyChapter}
              updateChapter={props.updateChapter}
            ></ChapterList>
            <span className="text-sm italic text-gray-400">
              To create a new chapter, go to an existing chapter that could lead
              to the new chapter and click the 'Create New Chapter' button
            </span>
          </div>
          {/* Progression Graph */}
          <div className="mt-8 flex flex-col">
            <span className="text-2xl">Progressions</span>
            <ProgressionGraph
              chapters={props.chapters}
              progressions={props.progressions}
            ></ProgressionGraph>
          </div>
        </>
      )}
    </>
  );
});

export default GamebookPage;
