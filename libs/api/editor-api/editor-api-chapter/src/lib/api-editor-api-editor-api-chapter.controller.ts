import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Chapter } from '../../../../../shared/api-interfaces/src';
import { ApiEditorApiEditorApiChapterService } from './api-editor-api-editor-api-chapter.service';

@Controller('editor-api/chapters')
export class ApiEditorApiEditorApiChapterController {
  constructor(
    private apiEditorApiEditorApiChapterService: ApiEditorApiEditorApiChapterService
  ) {}

  @Get('')
  getChapters(
    @Query('gamebookId') gamebookId: string,
    @Query('startingChapter') startingChapter: boolean
  ): Promise<Array<Chapter>> {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiChapterService.getChapters(
      userId,
      gamebookId,
      startingChapter
    );
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Chapter> {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiChapterService.getById(userId, id);
  }

  @Patch(':id')
  partialUpdateChapter(
    @Param('id') id: string,
    @Body() body
  ): Promise<Chapter> {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiChapterService.partialUpdateChapter(
      userId,
      id,
      body
    );
  }

  @Put(':id')
  fullUpdateChapter(@Param('id') id: string, @Body() body): Promise<Chapter> {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiChapterService.fullUpdateChapter(
      userId,
      id,
      body
    );
  }

  @Post()
  createChapter(@Body() body): Promise<Chapter> {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiChapterService.createChapter(userId, body);
  }

  @Delete(':id')
  deleteChapters(@Param('id') id: string): Promise<Chapter> {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiChapterService.deleteChapters(userId, id);
  }

  private getUserIdFromRequest(): string {
    return this._debugUser.sub;
  }

  _debugUser = {
    sub: '1',
  };
}
