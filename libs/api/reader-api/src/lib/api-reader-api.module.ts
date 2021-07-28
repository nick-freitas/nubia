import { Module } from '@nestjs/common';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { UserApiModelModule } from '@nubia/api/data-models/user';
import { ChapterApiModelModule } from '@nubia/api/data-models/chapter';
import { ReadingSessionApiModelModule } from '@nubia/api/data-models/reading-session';
import { ApiModelProgressionApiModelModule } from '@nubia/api/data-models/progression';
import { ApiReaderApiService } from './api-reader-api.service';
import { ApiReaderApiController } from './api-reader-api.controller';

@Module({
  imports: [
    GamebookApiModelModule,
    UserApiModelModule,
    ReadingSessionApiModelModule,
    ChapterApiModelModule,
    ApiModelProgressionApiModelModule,
  ],
  controllers: [ApiReaderApiController],
  providers: [ApiReaderApiService],
  exports: [ApiReaderApiService],
})
export class ApiReaderApiModule {}
