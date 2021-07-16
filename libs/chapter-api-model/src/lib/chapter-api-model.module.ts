import { Module } from '@nestjs/common';
import { Chapter } from '@nubia/api-interfaces';
import { ChapterApiModelService } from './chapter-api-model.service';

@Module({
  controllers: [],
  providers: [ChapterApiModelService],
  exports: [ChapterApiModelService],
})
export class ChapterApiModelModule {}
