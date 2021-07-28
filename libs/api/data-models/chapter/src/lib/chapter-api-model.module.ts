import { Module } from '@nestjs/common';
import { ChapterApiModelService } from './chapter-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';

@Module({
  imports: [ApiDbClientModule, GamebookApiModelModule],
  controllers: [],
  providers: [ChapterApiModelService],
  exports: [ChapterApiModelService],
})
export class ChapterApiModelModule {}
