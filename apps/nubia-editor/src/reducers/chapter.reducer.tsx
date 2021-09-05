import { ActionTypes } from '../action-types';
import ChapterActionTypes from '../action-types/chapter.action-types';
import ChapterModel from '../models/Chapter.model';

interface ChapterState {
  chapters: ChapterModel[];
  selectedChapter: ChapterModel | null;
}

const initialState: ChapterState = {
  chapters: [],
  selectedChapter: null,
};

interface ActionParam {
  type: ActionTypes;
  payload: any;
}

const ChaptersLoadList = (state: ChapterState, action: ActionParam) => ({
  ...state,
  chapters: action.payload,
});

const ChaptersDestroyOne = (state: ChapterState, action: ActionParam) => ({
  ...state,
  chapters: state.chapters.filter((c) => c.id !== action.payload),
});

const ChaptersSelectOne = (state: ChapterState, action: ActionParam) => ({
  ...state,
  selectedChapter: action.payload,
});

const ChaptersUpdateOneInList = (state: ChapterState, action: ActionParam) => ({
  ...state,
  chapters: state.chapters.map((c) =>
    c.id === action.payload.id ? action.payload : c
  ),
});

const ChaptersAddOne = (state: ChapterState, action: ActionParam) => ({
  ...state,
  chapters: [...state.chapters, action.payload],
});

const chapterReducer = (
  state: ChapterState = initialState,
  action: ActionParam
) => {
  switch (action.type) {
    case ChapterActionTypes.LoadChapters:
      return ChaptersLoadList(state, action);

    case ChapterActionTypes.DestroyChapter:
      return ChaptersDestroyOne(state, action);

    case ChapterActionTypes.SelectChapter:
      return ChaptersSelectOne(state, action);

    case ChapterActionTypes.UpdateChapter:
      return ChaptersUpdateOneInList(state, action);

    case ChapterActionTypes.AddChapter:
      return ChaptersAddOne(state, action);

    default:
      return { ...state };
  }
};

export default chapterReducer;
