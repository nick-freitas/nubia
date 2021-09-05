import { ActionTypes } from '../action-types';
import GamebookActionTypes from '../action-types/gamebook.action-types';
import GamebookModel from '../models/Gamebook.model';

interface GamebookState {
  gamebooks: GamebookModel[];
  selectedGamebook: GamebookModel | null;
}

const initialState: GamebookState = {
  gamebooks: [],
  selectedGamebook: null,
};

const gamebookReducer = (
  state: GamebookState = initialState,
  action: { type: ActionTypes; payload: any }
) => {
  switch (action.type) {
    case GamebookActionTypes.Gamebooks_SelectOne:
      return {
        ...state,
        selectedGamebook: action.payload,
      };
    case GamebookActionTypes.Gamebooks_LoadList:
      return { ...state, gamebooks: action.payload };
    case GamebookActionTypes.Gamebooks_AddOne:
      return { ...state, gamebooks: [...state.gamebooks, action.payload] };
    case GamebookActionTypes.Gamebooks_DestroyOne:
      return {
        ...state,
        gamebooks: state.gamebooks.filter((gb) => gb.id !== action.payload),
      };
    case GamebookActionTypes.Gamebooks_UpdateOne:
      return {
        ...state,
        gamebooks: state.gamebooks.map((gb) =>
          gb.id === action.payload.id ? action.payload : gb
        ),
      };
    default:
      return { ...state };
  }
};

export default gamebookReducer;
