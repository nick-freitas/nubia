import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiEditorApiEditorApiGamebookService } from './api-editor-api-editor-api-gamebook.service';

@Controller('editor-api/gamebooks')
export class ApiEditorApiEditorApiGamebookController {
  constructor(
    private apiEditorApiEditorApiGamebookService: ApiEditorApiEditorApiGamebookService
  ) {}

  @Get('')
  getGamebooks() {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiGamebookService.getGamebooks(userId);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiGamebookService.getById(userId, id);
  }

  @Patch(':id')
  partialUpdateGamebook(@Param('id') id: string, @Body() body) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiGamebookService.partialUpdateGamebook(
      userId,
      id,
      body
    );
  }

  @Put(':id')
  fullUpdateGamebook(@Param('id') id: string, @Body() body) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiGamebookService.fullUpdateGamebook(
      userId,
      id,
      body
    );
  }

  @Post()
  createGamebook(@Body() body) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiGamebookService.createGamebook(
      userId,
      body
    );
  }

  @Delete(':id')
  deleteGamebooks(@Param('id') id: string) {
    const userId = this.getUserIdFromRequest();
    return this.apiEditorApiEditorApiGamebookService.deleteGamebooks(
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
