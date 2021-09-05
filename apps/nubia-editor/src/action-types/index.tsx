import ChapterActionTypes from './chapter.action-types';
import GamebookActionTypes from './gamebook.action-types';
import ProgressionActionTypes from './progression.action-types';
import ReadThroughActionTypes from './read-through.action-types';

export type ActionTypes =
  | GamebookActionTypes
  | ChapterActionTypes
  | ProgressionActionTypes
  | ReadThroughActionTypes;
