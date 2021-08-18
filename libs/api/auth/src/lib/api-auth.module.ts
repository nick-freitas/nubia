import { Module } from '@nestjs/common';
import { UserApiModelModule } from '@nubia/api/data-models/user';
import { ApiAuthService } from './api-auth.service';
import { ApiAuthController } from './api-auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserApiModelModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [ApiAuthController],
  providers: [ApiAuthService, LocalStrategy, JwtStrategy],
  exports: [ApiAuthService],
})
export class ApiAuthModule {}
