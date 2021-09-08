import { createChapter, destroyChapter } from './chapter.actions';
import GamebookActionTypes from '../action-types/gamebook.action-types';
import ChapterModel from '../models/Chapter.model';
import GamebookModel from '../models/Gamebook.model';
import ChapterActionTypes from '../action-types/chapter.action-types';
import ProgressionActionTypes from '../action-types/progression.action-types';

const apiUrl = 'http://localhost:3333/editor-api/';
const fetchGamebooksUrl = () => `${apiUrl}Gamebooks`;
const fetchGamebookUrl = (gamebookId: string) =>
  `${apiUrl}Gamebooks/${gamebookId}`;
const destroyGamebookUrl = (gamebookId: string) =>
  `${apiUrl}Gamebooks/${gamebookId}`;
const createNewGamebookUrl = () => `${apiUrl}/Gamebooks`;
const updateGamebookUrl = (gamebookId: string) =>
  `${apiUrl}Gamebooks/${gamebookId}`;

export const fetchGamebooks: () => any = () => (dispatch: (a: any) => any) =>
  fetch(fetchGamebooksUrl())
    .then((res) => res.json())
    .then((gamebooks) =>
      dispatch({
        type: GamebookActionTypes.Gamebooks_LoadList,
        payload: gamebooks,
      })
    );
export type IFetchGamebooks = typeof fetchGamebooks;

export const fetchGamebook: (gamebookId: string) => any =
  (gamebookId: string) => (dispatch: (a: any) => any) =>
    fetch(fetchGamebookUrl(gamebookId))
      .then((res) => res.json())
      .then((gamebook) => {
        dispatch({
          type: GamebookActionTypes.Gamebooks_SelectOne,
          payload: gamebook,
        });
      });
export type IFetchGamebook = typeof fetchGamebook;

export const destroyGamebook: (gamebookId: string) => any =
  (gamebookId: string) => (dispatch: (a: any) => any) =>
    fetch(destroyGamebookUrl(gamebookId), {
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
    fetch(createNewGamebookUrl(), {
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
            isStartingChapter: true,
          })
        );
      });
export type ICreateNewGamebook = typeof createNewGamebook;

export const updateGamebook: (gamebook: Partial<GamebookModel>) => any =
  (gamebook: Partial<GamebookModel>) => async (dispatch: (a: any) => any) => {
    if (!gamebook.id) {
      throw new Error('missing gamebook id');
    }

    // eslint-disable-next-line no-console
    const res = await fetch(updateGamebookUrl(gamebook.id), {
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
