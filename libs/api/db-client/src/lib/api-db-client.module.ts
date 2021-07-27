import { Module } from '@nestjs/common';
import { ApiDbClientService } from './api-db-client.service';

@Module({
  controllers: [],
  providers: [ApiDbClientService],
  exports: [ApiDbClientService],
})
export class ApiDbClientModule {}
