import { Controller, Get, Param, Post } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { ApiReaderApiService } from './api-reader-api.service';

@Controller('reader-api')
export class ApiReaderApiController {
  _debugUser = {
    sub: '1',
  };

  constructor(private apiReaderApiService: ApiReaderApiService) {}
  @Get('dev-use-only/full-user-list')
  async getAll() {
    return this.apiReaderApiService.getAll();
  }

  @Get('gamebooks')
  async getGamebookLibrary(): Promise<Array<Partial<Gamebook>>> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.getGamebookLibrary(userId);
  }

  @Get('gamebook/:id')
  async getGamebook(@Param('id') id: string): Promise<Gamebook | null> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.getGamebook(id, userId);
  }

  @Post('gamebook/:gamebook_id/progression/:progression_id')
  async makeProgressionChoice(
    @Param('gamebook_id') gamebookId: string,
    @Param('progression_id') progressionId: string
  ): Promise<Gamebook | null> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.makeProgressionChoice(
      userId,
      gamebookId,
      progressionId
    );
  }

  @Post('gamebook/:gamebook_id/previous-choice')
  async previousChoice(
    @Param('gamebook_id') gamebookId: string
  ): Promise<Gamebook | null> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.previousChoice(gamebookId, userId);
  }

  @Post('gamebook/:gamebook_id/reset-choices')
  async resetChoices(
    @Param('gamebook_id') gamebookId: string
  ): Promise<Gamebook | null> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.resetChoices(gamebookId, userId);
  }

  private getUserIdFromRequest() {
    return this._debugUser.sub;
  }
}
