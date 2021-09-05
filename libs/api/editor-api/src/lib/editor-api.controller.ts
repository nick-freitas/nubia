import { Controller, Get, Param, Post } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { EditorApiService } from './editor-api.service';

@Controller('editor-api')
export class EditorApiController {
  _debugUser = {
    sub: '1',
  };

  constructor(private editorApiService: EditorApiService) {}
  @Get('dev-use-only/full-user-list')
  async getAll() {
    return this.editorApiService.getAll();
  }

  @Get('gamebooks')
  async getGamebooks(): Promise<Array<Partial<Gamebook>>> {
    const userId = this.getUserIdFromRequest();
    return this.editorApiService.getGamebooks(userId);
  }

  private getUserIdFromRequest() {
    return this._debugUser.sub;
  }
}
