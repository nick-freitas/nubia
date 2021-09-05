enum ProgressionActionTypes {
  Progressions_LoadList_BySourceChapterId = '[Progressions] Load List - By Source Chapter Id',
  Progressions_LoadList_ByDestinationChapterId = '[Progressions] Load List - By Destination Chapter Id',
  Progressions_CreateOne = '[Progressions] Create One',
  Progressions_UpdateOne = '[Progressions] Update One',
  Progressions_DestroyOne = '[Progressions] Destroy One',
  Progressions_DestroyMultiple_BySourceChapterId = '[Progressions] Destroy Multiple - By Source Chapter Id',
  Progressions_DestroyMultiple_ByDestinationChapterId = '[Progressions] Destroy Multiple - By Destination Chapter Id',
  Progressions_LoadList_ByGamebookId = '[Progressions] Load List - By Gamebook Id',
  Progession_ClearList = '[Progressions] Clear List',
}

export default ProgressionActionTypes;
