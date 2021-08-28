import { createChapter, destroyChapter } from './chapter.actions';
import GamebookActionTypes from '../action-types/gamebook.action-types';
import ChapterModel from '../models/Chapter.model';
import GamebookModel from '../models/Gamebook.model';
import ChapterActionTypes from '../action-types/chapter.action-types';
import ProgressionActionTypes from '../action-types/progression.action-types';

export const fetchGamebooks: () => any = () => (dispatch: (a: any) => any) =>
  fetch('http://localhost:3001/Gamebooks')
    .then((res) => res.json())
    .then((gamebooks) =>
      dispatch({
        type: GamebookActionTypes.Gamebooks_LoadList,
        payload: gamebooks,
      })
    );
export type IFetchGamebooks = typeof fetchGamebooks;

export const fetchGamebook: (gamebookId: number) => any =
  (gamebookId: number) => (dispatch: (a: any) => any) =>
    fetch(`http://localhost:3001/Gamebooks/${gamebookId}`)
      .then((res) => res.json())
      .then((gamebook) => {
        dispatch({
          type: GamebookActionTypes.Gamebooks_SelectOne,
          payload: gamebook,
        });
      });
export type IFetchGamebook = typeof fetchGamebook;

export const destroyGamebook: (gamebookId: number) => any =
  (gamebookId: number) => (dispatch: (a: any) => any) =>
    fetch(`http://localhost:3001/Gamebooks/${gamebookId}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch({
          type: GamebookActionTypes.Gamebooks_DestroyOne,
          payload: gamebookId,
        });

        return fetch(`http://localhost:3001/Chapters?gamebookId=${gamebookId}`);
      })
      .then((res) => res.json())
      .then((chapters) => {
        chapters.forEach((chapter: ChapterModel) => {
          dispatch(destroyChapter(chapter.id));
        });
      });
export type IDestroyGamebook = typeof destroyGamebook;

export const createNewGamebook: (newGamebook: Partial<GamebookModel>) => any =
  (newGamebook: Partial<GamebookModel>) => (dispatch: (a: any) => any) =>
    fetch('http://localhost:3001/Gamebooks/', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify(newGamebook),
    })
      .then((res) => res.json())
      .then((gamebook) => {
        dispatch({
          type: GamebookActionTypes.Gamebooks_AddOne,
          payload: gamebook,
        });

        // clear out existing
        dispatch({
          type: ChapterActionTypes.LoadChapters,
          payload: [],
        });

        dispatch({
          type: ProgressionActionTypes.Progession_ClearList,
        });

        dispatch(
          createChapter({
            gamebookId: gamebook.id,
            title: 'Chapter One',
            content:
              'Once upon a time... (or, you meet each other in a tavern)',
            startingChapter: true,
          })
        );
      });
export type ICreateNewGamebook = typeof createNewGamebook;

export const updateGamebook: (gamebook: Partial<GamebookModel>) => any =
  (gamebook: Partial<GamebookModel>) => async (dispatch: (a: any) => any) => {
    // eslint-disable-next-line no-console
    console.log('ab');
    const res = await fetch(`http://localhost:3001/Gamebooks/${gamebook.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify(gamebook),
    });

    const updatedGamebook = await res.json();

    dispatch({
      type: GamebookActionTypes.Gamebooks_UpdateOne,
      payload: updatedGamebook,
    });

    dispatch({
      type: GamebookActionTypes.Gamebooks_SelectOne,
      payload: updatedGamebook,
    });

    return updatedGamebook;
  };
export type IUpdateGamebook = typeof updateGamebook;
