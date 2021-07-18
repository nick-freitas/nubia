import { Module } from '@nestjs/common';
import { ApiModelProgressionApiModelService } from './api-model-progression-api-model.service';

@Module({
  controllers: [],
  providers: [ApiModelProgressionApiModelService],
  exports: [ApiModelProgressionApiModelService],
})
export class ApiModelProgressionApiModelModule {}
