import { ActionTypes } from '../action-types';
import ProgressionActionTypes from '../action-types/progression.action-types';
import ProgressionModel from '../models/Progression.model';

interface ProgressionState {
  progressionsById: { [id: string]: ProgressionModel };
  progressions: ProgressionModel[];
}

const initialState: ProgressionState = {
  progressionsById: {},
  progressions: [],
};

interface ActionParam {
  type: ActionTypes;
  payload: any;
}

const ProgressionClearList = () => ({ ...initialState });

const ProgressionsLoadList = (state: ProgressionState, action: ActionParam) => {
  let newProgressions = [...state.progressions];
  const newProgressionsById = { ...state.progressionsById };

  console.log(action?.payload);
  action?.payload?.forEach((progression: ProgressionModel) => {
    if (newProgressionsById[progression.id]) {
      // existing, update it
      newProgressions = newProgressions.map((np) =>
        np.id === progression.id ? progression : np
      );
    } else {
      // new, add it
      newProgressions = [...newProgressions, progression].sort((a, b) =>
        a.id.localeCompare(b.id)
      );
    }

    newProgressionsById[progression.id] = progression;
  });

  return {
    ...state,
    progressions: newProgressions,
    progressionsById: newProgressionsById,
  };
};

const ProgressionsCreateOne = (
  state: ProgressionState,
  action: ActionParam
) => {
  const newProgressions = [...state.progressions, action.payload];
  const newProgressionsById = { ...state.progressionsById };
  newProgressionsById[action.payload.id] = action.payload;

  return {
    ...state,
    progressionsById: newProgressionsById,
    progressions: newProgressions,
  };
};

const ProgressionsUpdateOne = (
  state: ProgressionState,
  action: ActionParam
) => {
  const newProgressionsById: { [id: number]: ProgressionModel } = {
    ...state.progressionsById,
  };
  const newProgressions: ProgressionModel[] = state.progressions.map((p) =>
    p.id === action.payload.id ? action.payload : p
  );
  newProgressionsById[action.payload.id] = action.payload;

  return {
    ...state,
    progressionsById: newProgressionsById,
    progressions: newProgressions,
  };
};

const ProgressionsDestroyOne = (
  state: ProgressionState,
  action: ActionParam
) => {
  const newProgressionsById: { [id: number]: ProgressionModel } = {
    ...state.progressionsById,
  };
  const newProgressions: ProgressionModel[] = state.progressions.filter(
    (p) => p.id !== action.payload
  );
  delete newProgressionsById[action.payload];

  return {
    ...state,
    progressionsById: newProgressionsById,
    progressions: newProgressions,
  };
};

const ProgressionsDestroyMultiple = (
  state: ProgressionState,
  action: ActionParam
) => {
  const newProgressionsById: { [id: string]: ProgressionModel } = {};
  const newProgressions: ProgressionModel[] = [];

  state.progressions.forEach((p) => {
    if (
      p.sourceChapterId !== action.payload &&
      p.destinationChapterId !== action.payload
    ) {
      newProgressions.push(p);
    } else {
      newProgressionsById[p.id] = p;
    }
  });

  return {
    ...state,
    progressions: state.progressions.filter(
      (progression) =>
        progression.sourceChapterId !== action.payload &&
        progression.destinationChapterId !== action.payload
    ),
  };
};

const progressionReducer = (
  state: ProgressionState = initialState,
  action: { type: ActionTypes; payload: any }
) => {
  switch (action.type) {
    case ProgressionActionTypes.Progession_ClearList:
      return ProgressionClearList();
    case ProgressionActionTypes.Progressions_LoadList_ByGamebookId:
    case ProgressionActionTypes.Progressions_LoadList_BySourceChapterId:
    case ProgressionActionTypes.Progressions_LoadList_ByDestinationChapterId:
      return ProgressionsLoadList(state, action);

    case ProgressionActionTypes.Progressions_CreateOne:
      return ProgressionsCreateOne(state, action);

    case ProgressionActionTypes.Progressions_UpdateOne:
      return ProgressionsUpdateOne(state, action);

    case ProgressionActionTypes.Progressions_DestroyOne:
      return ProgressionsDestroyOne(state, action);

    case ProgressionActionTypes.Progressions_DestroyMultiple_BySourceChapterId:
    case ProgressionActionTypes.Progressions_DestroyMultiple_ByDestinationChapterId:
      return ProgressionsDestroyMultiple(state, action);

    default:
      return { ...state };
  }
};

export default progressionReducer;
