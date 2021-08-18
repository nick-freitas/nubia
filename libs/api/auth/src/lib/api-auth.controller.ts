import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiAuthService } from './api-auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class ApiAuthController {
  constructor(private apiAuthService: ApiAuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('controller');
    return this.apiAuthService.login(req.user);
  }
}
