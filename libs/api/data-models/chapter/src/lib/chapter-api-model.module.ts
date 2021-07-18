import { Module } from '@nestjs/common';
import { ChapterApiModelService } from './chapter-api-model.service';

@Module({
  controllers: [],
  providers: [ChapterApiModelService],
  exports: [ChapterApiModelService],
})
export class ChapterApiModelModule {}
