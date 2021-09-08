import { Module } from '@nestjs/common';
import { ApiEditorApiEditorApiGamebookModule } from '@nubia/api/editor-api/editor-api-gamebook';
import { ApiEditorApiEditorApiProgressionModule } from '@nubia/api/editor-api/editor-api-progression';
import { ApiEditorApiEditorApiChapterModule } from '@nubia/api/editor-api/editor-api-chapter';

@Module({
  imports: [
    ApiEditorApiEditorApiGamebookModule,
    ApiEditorApiEditorApiProgressionModule,
    ApiEditorApiEditorApiChapterModule,
  ],
})
export class EditorApiModule {}
