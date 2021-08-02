import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserApiModelService } from '@nubia/api/data-models/user';
import { User } from '@nubia/shared/api-interfaces';

@Injectable()
export class ApiAuthService {
  constructor(
    private userApiModelService: UserApiModelService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    username: string,
    _plaintextPassword: string
  ): Promise<Partial<User> | null> {
    const user = await this.userApiModelService.getFullUserByUserName(username);
    const match = await bcrypt.compare(_plaintextPassword, user.password);

    if (!match) {
      throw new UnauthorizedException();
    }

    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: Partial<User>): Promise<{ access_token: string }> {
    const payload = { sub: user.id, username: user.username, name: user.name };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
