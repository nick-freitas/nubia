import ProgressionActionTypes from '../action-types/progression.action-types';
import ProgressionModel from '../models/Progression.model';

const apiUrl = 'http://localhost:3333/editor-api/';

export const fetchProgressionsByGamebookId: (gamebookId: string) => any =
  (gamebookId: string) => (dispatch: (a: any) => any) =>
    fetch(`${apiUrl}Progressions?gamebookId=${gamebookId}`)
      .then((res) => res.json())
      .then((progressions) => {
        dispatch({
          type: ProgressionActionTypes.Progressions_LoadList_ByGamebookId,
          payload: progressions,
        });
      });
export type IFetchProgressionsByGamebookId =
  typeof fetchProgressionsByGamebookId;

export const fetchProgressionsBySourceChapterId: (chapterId: string) => any =
  (chapterId: string) => (dispatch: (a: any) => any) => {
    fetch(`${apiUrl}Progressions?sourceChapterId=${chapterId}`)
      .then((res) => res.json())
      .then((progressions) => {
        dispatch({
          type: ProgressionActionTypes.Progressions_LoadList_BySourceChapterId,
          payload: progressions,
        });
      });
  };
export type IFetchProgressionsBySourceChapterId =
  typeof fetchProgressionsBySourceChapterId;

export const fetchProgressionsByDestinationChapterId: (
  chapterId: string
) => any = (chapterId: string) => (dispatch: (a: any) => any) => {
  fetch(`${apiUrl}Progressions?destinationChapterId=${chapterId}`)
    .then((res) => res.json())
    .then((progressions) => {
      dispatch({
        type: ProgressionActionTypes.Progressions_LoadList_ByDestinationChapterId,
        payload: progressions,
      });
    });
};
export type IFetchProgressionsByDestinationChapterId =
  typeof fetchProgressionsByDestinationChapterId;

export const createProgression: (
  newProgression: Partial<ProgressionModel>
) => any =
  (newProgression: Partial<ProgressionModel>) =>
  (dispatch: (a: any) => any) => {
    fetch(`${apiUrl}Progressions`, {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify(newProgression),
    })
      .then((res) => res.json())
      .then((progressions) => {
        dispatch({
          type: ProgressionActionTypes.Progressions_CreateOne,
          payload: progressions,
        });
      });
  };
export type ICreateProgression = typeof createProgression;

export const updateProgression: (
  updatedProgression: Partial<ProgressionModel>
) => any =
  (progression: Partial<ProgressionModel>) => (dispatch: (a: any) => any) => {
    fetch(`${apiUrl}Progressions/${progression.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'content-type': 'application/json',
      }),
      body: JSON.stringify(progression),
    })
      .then((res) => res.json())
      .then((updatedProgression) => {
        dispatch({
          type: ProgressionActionTypes.Progressions_UpdateOne,
          payload: updatedProgression,
        });
      });
  };
export type IUpdateProgression = typeof updateProgression;

export const destroyProgression: (progressionId: string) => any =
  (progressionId: string) => (dispatch: (a: any) => any) => {
    fetch(`${apiUrl}Progressions/${progressionId}`, {
      method: 'DELETE',
    }).then(() => {
      dispatch({
        type: ProgressionActionTypes.Progressions_DestroyOne,
        payload: progressionId,
      });
    });
  };
export type IDestroyProgression = typeof destroyProgression;

export const destroyMultipleProgressionBySourceChapterId: (
  chapterId: string
) => any = (chapterId: string) => (dispatch: (a: any) => any) =>
  fetch(`${apiUrl}Progressions?sourceChapterId=${chapterId}`)
    .then((res) => res.json())
    .then((progressions: ProgressionModel[]) =>
      Promise.all(
        progressions.map((p) =>
          fetch(`${apiUrl}Progressions/${p.id}`, {
            method: 'DELETE',
          })
        )
      )
    )
    .then(() => {
      dispatch({
        type: ProgressionActionTypes.Progressions_DestroyMultiple_BySourceChapterId,
        payload: chapterId,
      });
    });
export type IDestroyMultipleProgressionBySourceChapterId =
  typeof destroyMultipleProgressionBySourceChapterId;

export const destroyMultipleProgressionByDestinationChapterId: (
  chapterId: string
) => any = (chapterId: string) => (dispatch: (a: any) => any) => {
  fetch(`${apiUrl}Progressions?destinationChapterId=${chapterId}`)
    .then((res) => res.json())
    .then((progressions: ProgressionModel[]) =>
      Promise.all(
        progressions.map((p) =>
          fetch(`${apiUrl}Progressions/${p.id}`, {
            method: 'DELETE',
          })
        )
      )
    )
    .then(() => {
      dispatch({
        type: ProgressionActionTypes.Progressions_DestroyMultiple_ByDestinationChapterId,
        payload: chapterId,
      });
    });
};
export type IDestroyMultipleProgressionByDestinationChapterId =
  typeof destroyMultipleProgressionByDestinationChapterId;
