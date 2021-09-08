import { Module } from '@nestjs/common';
import { ApiEditorApiEditorApiGamebookService } from './api-editor-api-editor-api-gamebook.service';
import { ApiEditorApiEditorApiGamebookController } from './api-editor-api-editor-api-gamebook.controller';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';

@Module({
  imports: [GamebookApiModelModule],
  controllers: [ApiEditorApiEditorApiGamebookController],
  providers: [ApiEditorApiEditorApiGamebookService],
  exports: [ApiEditorApiEditorApiGamebookService],
})
export class ApiEditorApiEditorApiGamebookModule {}
