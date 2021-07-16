import { Module } from '@nestjs/common';
import { UserApiModelService } from './user-api-model.service';

@Module({
  controllers: [],
  providers: [UserApiModelService],
  exports: [UserApiModelService],
})
export class UserApiModelModule {}
