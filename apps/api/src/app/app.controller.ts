import { Controller, Get } from '@nestjs/common';
import { Gamebook, Message } from '@nubia/shared/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('library/gamebooks')
  async getLibraryGamebook(): Promise<Array<Gamebook>> {
    const userId = '1';
    return this.appService.getLibraryGamebook(userId);
  }
}
