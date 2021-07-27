import { Controller, Get, Param } from '@nestjs/common';
import { Gamebook } from '@nubia/shared/api-interfaces';
import { ApiReaderApiService } from './api-reader-api.service';

@Controller('reader-api')
export class ApiReaderApiController {
  _debugUser = {
    sub: '1',
  };

  constructor(private apiReaderApiService: ApiReaderApiService) {}
  @Get()
  async getAll() {
    return this.apiReaderApiService.getAll();
  }

  @Get('gamebooks')
  async getGamebookLibrary(): Promise<Array<Gamebook>> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.getGamebookLibrary(userId);
  }

  @Get('gamebook/:id')
  async getGamebook(@Param('id') id: string): Promise<Gamebook | null> {
    const userId = this.getUserIdFromRequest();
    return this.apiReaderApiService.getGamebook(id, userId);
  }

  private getUserIdFromRequest() {
    return this._debugUser.sub;
  }
}
