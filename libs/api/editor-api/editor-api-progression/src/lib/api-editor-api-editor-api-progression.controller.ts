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
import { ApiEditorApiEditorApiProgressionService } from './api-editor-api-editor-api-progression.service';

@Controller('editor-api/progressions')
export class ApiEditorApiEditorApiProgressionController {
  constructor(
    private apiEditorApiEditorApiProgressionService: ApiEditorApiEditorApiProgressionService
  ) {}

  @Get('')
  getProgressions(
    @Query('gamebookId') gamebookId: string,
    @Query('sourceChapterId') sourceChapterId: string,
    @Query('destinationChapterId') destinationChapterId: string
  ) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiProgressionService.getProgressions(
      userId,
      gamebookId,
      sourceChapterId,
      destinationChapterId
    );
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiProgressionService.getById(userId, id);
  }

  @Patch(':id')
  partialUpdateProgression(@Param('id') id: string, @Body() body) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiProgressionService.partialUpdateProgression(
      userId,
      id,
      body
    );
  }

  @Put(':id')
  fullUpdateProgression(@Param('id') id: string, @Body() body) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiProgressionService.fullUpdateProgression(
      userId,
      id,
      body
    );
  }

  @Post()
  createProgression(@Body() body) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiProgressionService.createProgression(
      userId,
      body
    );
  }

  @Delete(':id')
  deleteProgressions(@Param('id') id: string) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiProgressionService.deleteProgressions(
      userId,
      id
    );
  }

  private getUserIdFromRequest() {
    return this._debugUser.sub;
  }

  _debugUser = {
    sub: '1',
  };
}
