import ReadThroughActionTypes from '../action-types/read-through.action-types';
import ChapterModel from '../models/Chapter.model';
import { fetchChapter } from './chapter.actions';

const apiUrl = 'http://localhost:3333/editor-api/';

export const loadReadThrough: (
  chapter: Partial<ChapterModel> | null | undefined
) => any =
  (chapter: Partial<ChapterModel> | null | undefined) =>
  async (dispatch: (a: any) => any) => {
    if (!chapter) return chapter;

    dispatch({
      type: ReadThroughActionTypes.LoadChapter,
      payload: chapter,
    });

    dispatch(fetchChapter(chapter.id));

    return chapter;
  };
export type ILoadReadThrough = typeof loadReadThrough;

export const goBack: () => any = () => async (dispatch: (a: any) => any) => {
  dispatch({
    type: ReadThroughActionTypes.PreviousChapter,
  });
};
export type IGoBack = typeof goBack;
