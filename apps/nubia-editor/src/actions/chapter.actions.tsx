import ChapterActionTypes from '../action-types/chapter.action-types';
import ChapterModel from '../models/Chapter.model';
import {
  destroyMultipleProgressionByDestinationChapterId,
  destroyMultipleProgressionBySourceChapterId,
} from './progression.actions';

const apiUrl = 'http://localhost:3333/editor-api/';

export const fetchChapters: (gamebookId: number) => any =
  (gamebookId: number) => async (dispatch: (a: any) => any) => {
    const res = await fetch(`${apiUrl}Chapters?gamebookId=${gamebookId}`);

    const chapters: ChapterModel[] = await res.json();

    dispatch({
      type: ChapterActionTypes.LoadChapters,
      payload: chapters,
    });

    return chapters;
  };
export type IFetchChapters = typeof fetchChapters;

export const destroyChapter: (chapterId: number) => any =
  (chapterId: number) => async (dispatch: (a: any) => any) => {
    await fetch(`${apiUrl}Chapters/${chapterId}`, {
      method: 'DELETE',
    });

    dispatch({
      type: ChapterActionTypes.DestroyChapter,
      payload: chapterId,
    });

    dispatch(destroyMultipleProgressionBySourceChapterId(chapterId));
    dispatch(destroyMultipleProgressionByDestinationChapterId(chapterId));
  };
export type IDestroyChapter = typeof destroyChapter;

export const fetchStartingChapter: (gamebookId: number) => any =
  (gamebookId: number) => async (dispatch: (a: any) => any) => {
    const res = await fetch(
      `${apiUrl}Chapters?gamebookId=${gamebookId}&startingChapter=${true}`
    );

    const chapters: ChapterModel[] = await res.json();
    const chapter = chapters?.[0];

    dispatch({
      type: ChapterActionTypes.SelectChapter,
      payload: chapter,
    });

    return chapter;
  };
export type IFetchStartingChapter = typeof fetchStartingChapter;

export const fetchChapter: (chapterId: number | undefined) => any =
  (chapterId: number | undefined) => async (dispatch: (a: any) => any) => {
    if (!chapterId) return;
    const res = await fetch(`${apiUrl}Chapters/${chapterId}`);
    const chapter: ChapterModel = await res.json();

    dispatch({
      type: ChapterActionTypes.SelectChapter,
      payload: chapter,
    });

    // Todo: This is VERY inefficient, this is just for now
    dispatch(fetchChapters(chapter.gamebookId));
  };
export type IFetchChapter = typeof fetchChapter;

export const selectChapter: (chapter: ChapterModel) => any =
  (chapter: ChapterModel) => async (dispatch: (a: any) => any) => {
    dispatch({
      type: ChapterActionTypes.SelectChapter,
      payload: chapter,
    });
  };
export type ISelectChapter = typeof selectChapter;

export const updateChapter: (
  chapterId: number,
  chapter: Partial<ChapterModel>
) => any =
  (chapterId: number, chapter: Partial<ChapterModel>) =>
  async (dispatch: (a: any) => any) => {
    const res = await fetch(`${apiUrl}Chapters/${chapterId}`, {
      method: 'PATCH',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify(chapter),
    });

    const updatedChapter: ChapterModel = await res.json();

    dispatch({
      type: ChapterActionTypes.SelectChapter,
      payload: updatedChapter,
    });

    dispatch({
      type: ChapterActionTypes.UpdateChapter,
      payload: updatedChapter,
    });

    return updatedChapter;
  };
export type IUpdateChapter = typeof updateChapter;

export const createChapter: (chapter: Partial<ChapterModel>) => any =
  (chapter: Partial<ChapterModel>) => async (dispatch: (a: any) => any) => {
    const res = await fetch(`${apiUrl}Chapters`, {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify(chapter),
    });

    const newChapter: ChapterModel = await res.json();

    dispatch({
      type: ChapterActionTypes.AddChapter,
      payload: newChapter,
    });

    return newChapter;
  };
export type ICreateChapter = typeof createChapter;
