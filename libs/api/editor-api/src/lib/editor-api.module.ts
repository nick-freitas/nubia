import { Module } from '@nestjs/common';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { UserApiModelModule } from '@nubia/api/data-models/user';
import { ChapterApiModelModule } from '@nubia/api/data-models/chapter';
import { ReadingSessionApiModelModule } from '@nubia/api/data-models/reading-session';
import { ApiModelProgressionApiModelModule } from '@nubia/api/data-models/progression';
import { EditorApiController } from './editor-api.controller';
import { EditorApiService } from './editor-api.service';

@Module({
  imports: [
    GamebookApiModelModule,
    UserApiModelModule,
    ReadingSessionApiModelModule,
    ChapterApiModelModule,
    ApiModelProgressionApiModelModule,
  ],
  providers: [EditorApiService],
  controllers: [EditorApiController],
  exports: [EditorApiService],
})
export class EditorApiModule {}
