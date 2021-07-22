import { Module } from '@nestjs/common';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { GamebookLibraryService } from './gamebook-library.service';

@Module({
  controllers: [],
  providers: [GamebookLibraryService],
  exports: [GamebookLibraryService],
  imports: [GamebookApiModelModule],
})
export class GamebookLibraryApiModelModule {}
