import { Module } from '@nestjs/common';
import { ReadingSessionApiModelService } from './reading-session-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';

@Module({
  imports: [ApiDbClientModule],
  controllers: [],
  providers: [ReadingSessionApiModelService],
  exports: [ReadingSessionApiModelService],
})
export class ReadingSessionApiModelModule {}
