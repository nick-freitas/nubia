import { Module } from '@nestjs/common';
import { UserApiModelService } from './user-api-model.service';
import { ApiDbClientModule } from '@nubia/api/db-client';

@Module({
  imports: [ApiDbClientModule],
  controllers: [],
  providers: [UserApiModelService],
  exports: [UserApiModelService],
})
export class UserApiModelModule {}
