interface ProgressionModel {
  id: number;
  gamebookId: number;
  sourceChapterId: number;
  destinationChapterId: number;
  descriptor: string;
  startingChapter: boolean;
  rollGuard: boolean;
  rollValue: number | null;
  rollType: string | null;
}

export default ProgressionModel;
