import { Module } from '@nestjs/common';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { ApiReaderApiService } from './api-reader-api.service';
import { ApiReaderApiController } from './api-reader-api.controller';

@Module({
  imports: [GamebookApiModelModule],
  controllers: [ApiReaderApiController],
  providers: [ApiReaderApiService],
  exports: [ApiReaderApiService],
})
export class ApiReaderApiModule {}
