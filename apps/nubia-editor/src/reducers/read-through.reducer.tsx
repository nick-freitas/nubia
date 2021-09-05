import { ActionTypes } from '../action-types';
import ReadThroughActionTypes from '../action-types/read-through.action-types';
import ChapterModel from '../models/Chapter.model';

interface ReadThroughState {
  chapters: ChapterModel[];
  currentChapter: ChapterModel | null;
}

const initialState: ReadThroughState = {
  chapters: [],
  currentChapter: null,
};

interface ActionParam {
  type: ActionTypes;
  payload: any;
}

const readThroughReducer = (
  state: ReadThroughState = initialState,
  action: ActionParam
) => {
  switch (action.type) {
    case ReadThroughActionTypes.LoadChapter: {
      // if its null dont do anything
      if (!action.payload) return { ...state };

      // if its the one we already have, dont do anything
      if (state.chapters?.[0]?.id === action.payload.id) {
        return { ...state };
      }

      // if this chapter is from a new gamebook, then remove everything
      if (state.chapters?.[0]?.gamebookId !== action.payload.gamebookId) {
        return {
          ...state,
          currentChapter: action.payload,
          chapters: [action.payload],
        };
      }

      return {
        ...state,
        chapters: [action.payload, ...state.chapters],
        currentChapter: action.payload,
      };
    }
    case ReadThroughActionTypes.PreviousChapter: {
      const [, prevChapter, ...remaining] = state.chapters;

      return {
        ...state,
        chapters: [prevChapter, ...remaining],
        currentChapter: prevChapter,
      };
    }
    default:
      return { ...state };
  }
};

export default readThroughReducer;
