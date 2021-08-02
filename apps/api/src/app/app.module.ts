import { Module } from '@nestjs/common';
import { ApiReaderApiModule } from '@nubia/api/reader-api';
import { ApiAuthModule } from '@nubia/api/auth';

@Module({
  imports: [ApiReaderApiModule, ApiAuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
