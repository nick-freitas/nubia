import ReactHtmlParser from 'react-html-parser';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import {
  ISelectChapter,
  selectChapter,
  IFetchChapters,
  fetchChapters,
  IFetchChapter,
  fetchChapter,
  IFetchStartingChapter,
  fetchStartingChapter,
} from '../../actions/chapter.actions';
import { IFetchGamebook, fetchGamebook } from '../../actions/gamebook.actions';
import {
  IFetchProgressionsBySourceChapterId,
  fetchProgressionsBySourceChapterId,
} from '../../actions/progression.actions';
import {
  goBack,
  IGoBack,
  loadReadThrough,
  ILoadReadThrough,
} from '../../actions/read-through.actions';
import DebugPrintObject from '../../core-components/DebugPrintObject';
import ChapterModel from '../../models/Chapter.model';
import GamebookModel from '../../models/Gamebook.model';
import ProgressionModel from '../../models/Progression.model';

interface ReadGamebookPageProps
  extends RouteComponentProps<{ gamebookId: string }> {
  fetchChapter: IFetchChapter;
  fetchChapters: IFetchChapters;
  fetchStartingChapter: IFetchStartingChapter;
  fetchGamebook: IFetchGamebook;
  fetchProgressionsBySourceChapterId: IFetchProgressionsBySourceChapterId;
  goBack: IGoBack;
  loadReadThrough: ILoadReadThrough;
  selectChapter: ISelectChapter;
  gamebook: GamebookModel;
  chapter: ChapterModel;
  chapters: ChapterModel[];
  progressions: ProgressionModel[];
  currentChapterInReadThrough: ChapterModel | null;
  chaptersInReadThrough: ChapterModel[];
}

const mapStateToProps = (state: any) => ({
  gamebook: state.gamebooks.selectedGamebook,
  chapter: state.chapters.selectedChapter,
  chapters: state.chapters.chapters,
  progressions: state.progressions.progressions,
  currentChapterInReadThrough: state.readThrough.currentChapter,
  chaptersInReadThrough: state.readThrough.chapters,
});

const ReadGamebookPage = connect(mapStateToProps, {
  fetchChapter,
  fetchChapters,
  fetchStartingChapter,
  fetchGamebook,
  fetchProgressionsBySourceChapterId,
  goBack,
  loadReadThrough,
  selectChapter,
})((props: ReadGamebookPageProps) => {
  useEffect(() => {
    props
      .fetchGamebook(Number(props.match.params.gamebookId))
      .then(() =>
        props.fetchStartingChapter(Number(props.match.params.gamebookId))
      )
      .then((chapter: ChapterModel) => {
        props.loadReadThrough(chapter);
      });
  }, [props.match.params.gamebookId]);

  useEffect(() => {
    props.fetchProgressionsBySourceChapterId(props.chapter?.id);
  }, [props.chapter]);

  const goToTopOfPage = () => window.scrollTo(0, 0);

  const goToPreviousChapter = async (chapters: ChapterModel[]) => {
    const chapter = chapters[1];
    await props.goBack();
    props.selectChapter(chapter);
    goToTopOfPage();
  };

  const goToChapter = (chapterId: number) => {
    const chapter = props.chapters.find((c) => c.id === chapterId);
    props.loadReadThrough(chapter);
    goToTopOfPage();
  };

  return (
    <>
      {props.chapter && (
        <div className="flex flex-col">
          {/* title */}
          <span className="text-2xl font-bold">{props?.gamebook.title}</span>
          {/* Go Back Button */}
          {props.chaptersInReadThrough?.length > 1 && (
            <div
              onClick={() => goToPreviousChapter(props.chaptersInReadThrough)}
              className="cursor-pointer"
            >
              GO BACK
            </div>
          )}

          {/* Chapter Content */}
          <Card className="mt-2">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <span className="text-xl font-bold">{props.chapter.title}</span>
              </Typography>
              <div className="mt-4 ck-content">
                {ReactHtmlParser(props?.chapter?.content)}
              </div>
            </CardContent>
          </Card>

          {/* Progressions */}
          {props.progressions && (
            <div className="mt-4">
              <div className="flex space-x-1">
                {props.progressions
                  ?.filter((p) => p.sourceChapterId === props.chapter.id)
                  ?.map((p) => (
                    <Button
                      key={p.id}
                      variant="outlined"
                      color="primary"
                      onClick={() => goToChapter(p.destinationChapterId)}
                    >
                      {p.descriptor}
                    </Button>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <DebugPrintObject>{props.chapter}</DebugPrintObject>
        <DebugPrintObject>{props.gamebook}</DebugPrintObject>
        <DebugPrintObject>{props.progressions}</DebugPrintObject>
      </div>
    </>
  );
});

export default ReadGamebookPage;
