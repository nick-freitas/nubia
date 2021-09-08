import { Module } from '@nestjs/common';
import { ApiReaderApiModule } from '@nubia/api/reader-api';
import { EditorApiModule } from '@nubia/api/editor-api/editor-api-shell';
import { ApiAuthModule } from '@nubia/api/auth';

@Module({
  imports: [ApiReaderApiModule, ApiAuthModule, EditorApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
