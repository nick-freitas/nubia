import { Module } from '@nestjs/common';
import { ChapterApiModelService } from './chapter-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';

@Module({
  imports: [ApiDbClientModule],
  controllers: [],
  providers: [ChapterApiModelService],
  exports: [ChapterApiModelService],
})
export class ChapterApiModelModule {}
