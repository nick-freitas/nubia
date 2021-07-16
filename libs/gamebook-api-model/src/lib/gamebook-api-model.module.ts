import { Module } from '@nestjs/common';
import { GamebookApiModelService } from './gamebook-api-model.service';
import { UserApiModelModule } from '@nubia/user-api-model';

@Module({
  controllers: [],
  providers: [GamebookApiModelService],
  exports: [GamebookApiModelService],
  imports: [UserApiModelModule],
})
export class GamebookApiModelModule {}
