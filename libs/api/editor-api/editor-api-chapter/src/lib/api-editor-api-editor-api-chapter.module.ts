import { Module } from '@nestjs/common';
import { ApiEditorApiEditorApiChapterService } from './api-editor-api-editor-api-chapter.service';
import { ApiEditorApiEditorApiChapterController } from './api-editor-api-editor-api-chapter.controller';
import { ChapterApiModelModule } from '@nubia/api/data-models/chapter';

@Module({
  imports: [ChapterApiModelModule],
  controllers: [ApiEditorApiEditorApiChapterController],
  providers: [ApiEditorApiEditorApiChapterService],
  exports: [ApiEditorApiEditorApiChapterService],
})
export class ApiEditorApiEditorApiChapterModule {}
