import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamebookLibraryApiModelModule } from '@nubia/api/data-models/gamebook-library';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';

@Module({
  imports: [GamebookLibraryApiModelModule, GamebookApiModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
