import { Module } from '@nestjs/common';
import { ApiEditorApiEditorApiProgressionService } from './api-editor-api-editor-api-progression.service';
import { ApiEditorApiEditorApiProgressionController } from './api-editor-api-editor-api-progression.controller';
import { ApiModelProgressionApiModelModule } from '@nubia/api/data-models/progression';

@Module({
  imports: [ApiModelProgressionApiModelModule],
  controllers: [ApiEditorApiEditorApiProgressionController],
  providers: [ApiEditorApiEditorApiProgressionService],
  exports: [ApiEditorApiEditorApiProgressionService],
})
export class ApiEditorApiEditorApiProgressionModule {}
