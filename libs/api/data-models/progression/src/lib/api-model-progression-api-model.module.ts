import { Module } from '@nestjs/common';
import { ApiModelProgressionApiModelService } from './api-model-progression-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';

@Module({
  imports: [ApiDbClientModule],
  controllers: [],
  providers: [ApiModelProgressionApiModelService],
  exports: [ApiModelProgressionApiModelService],
})
export class ApiModelProgressionApiModelModule {}
