import { Module } from '@nestjs/common';
import { ProgressionApiModelService } from './api-model-progression-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';

@Module({
  imports: [ApiDbClientModule],
  controllers: [],
  providers: [ProgressionApiModelService],
  exports: [ProgressionApiModelService],
})
export class ApiModelProgressionApiModelModule {}
