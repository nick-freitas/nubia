import { Module } from '@nestjs/common';
import { ReadingSessionApiModelService } from './reading-session-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';
import { ApiModelProgressionApiModelModule } from '@nubia/api/data-models/progression';

@Module({
  imports: [ApiDbClientModule, ApiModelProgressionApiModelModule],
  controllers: [],
  providers: [ReadingSessionApiModelService],
  exports: [ReadingSessionApiModelService],
})
export class ReadingSessionApiModelModule {}
