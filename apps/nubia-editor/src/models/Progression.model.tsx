import { Progression } from '@nubia/shared/api-interfaces';

interface ProgressionModel extends Progression {
  rollGuard: boolean;
  rollType: string | null;
  rollValue: number | null;
  gamebookId: string;
}

export default ProgressionModel;
