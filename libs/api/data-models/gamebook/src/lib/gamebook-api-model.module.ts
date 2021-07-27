import { Module } from '@nestjs/common';
import { GamebookApiModelService } from './gamebook-api-model.service';
import { UserApiModelModule } from '@nubia/api/data-models/user';
import { ApiDbClientModule } from '@nubia/api/db-client';

@Module({
  providers: [GamebookApiModelService],
  exports: [GamebookApiModelService],
  imports: [UserApiModelModule, ApiDbClientModule],
})
export class GamebookApiModelModule {}
