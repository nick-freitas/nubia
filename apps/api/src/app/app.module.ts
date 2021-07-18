import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamebookApiModelModule } from '@nubia/api-model/gamebook-api-model';

@Module({
  imports: [GamebookApiModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
