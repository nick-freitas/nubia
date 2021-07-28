import { Module } from '@nestjs/common';
import { ApiReaderApiModule } from '@nubia/api/reader-api';

@Module({
  imports: [ApiReaderApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
