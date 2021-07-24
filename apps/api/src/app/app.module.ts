import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiReaderApiModule } from '@nubia/api/reader-api';

@Module({
  imports: [ApiReaderApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
