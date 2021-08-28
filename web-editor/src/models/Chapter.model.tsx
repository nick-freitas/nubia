interface ChapterModel {
  id: number;
  gamebookId: number;
  title: string;
  content: string;
  startingChapter?: boolean;
}

export default ChapterModel;
