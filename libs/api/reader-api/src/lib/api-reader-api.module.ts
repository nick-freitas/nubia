import { Module } from '@nestjs/common';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { UserApiModelModule } from '@nubia/api/data-models/user';
import { ReadingSessionApiModelModule } from '@nubia/api/data-models/reading-session';
import { ApiReaderApiService } from './api-reader-api.service';
import { ApiReaderApiController } from './api-reader-api.controller';

@Module({
  imports: [
    GamebookApiModelModule,
    UserApiModelModule,
    ReadingSessionApiModelModule,
  ],
  controllers: [ApiReaderApiController],
  providers: [ApiReaderApiService],
  exports: [ApiReaderApiService],
})
export class ApiReaderApiModule {}
