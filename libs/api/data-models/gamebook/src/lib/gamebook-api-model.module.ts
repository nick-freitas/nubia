import { Module } from '@nestjs/common';
import { GamebookApiModelService } from './gamebook-api-model.service';
import { UserApiModelModule } from '@nubia/api/data-models/user';

@Module({
  providers: [GamebookApiModelService],
  exports: [GamebookApiModelService],
  imports: [UserApiModelModule],
})
export class GamebookApiModelModule {}
