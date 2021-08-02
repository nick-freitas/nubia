import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiAuthService } from './api-auth.service';

@Controller('auth')
export class ApiAuthController {
  constructor(private apiAuthService: ApiAuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('login')
  async login(@Request() req) {
    return this.apiAuthService.login(req.user);
  }
}
