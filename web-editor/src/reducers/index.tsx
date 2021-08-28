import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chapterReducer from './chapter.reducer';
import gamebookReducer from './gamebook.reducer';
import progressionReducer from './progression.reducer';
import readThroughReducer from './read-through.reducer';

const rootReducer = (history: any) =>
  combineReducers({
    gamebooks: gamebookReducer,
    chapters: chapterReducer,
    progressions: progressionReducer,
    readThrough: readThroughReducer,
    router: connectRouter(history),
  });

export default rootReducer;
