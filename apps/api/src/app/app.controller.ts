import { Controller, Get, Param } from '@nestjs/common';
import { Gamebook, Message } from '@nubia/shared/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('gamebook-library/gamebooks')
  async getGamebookLibrary(): Promise<Array<Gamebook>> {
    const userId = '1';
    return this.appService.getGamebookLibrary(userId);
  }

  @Get('gamebook-library/gamebook/:id')
  async getGamebook(@Param('id') id: string): Promise<Gamebook> {
    const userId = '1';
    return this.appService.getGamebook(id, userId);
  }
}
