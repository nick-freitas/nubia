import { Injectable } from '@nestjs/common';
import { PublicUser } from '@nubia/shared/api-interfaces';
import { UserDB } from './data';

@Injectable()
export class UserApiModelService {
  login(username: string, password: string): Promise<void> {
    if (!username || !password) {
      throw new Error('Missing username or password');
    }

    throw new Error('Not Yet Implemented');
  }

  getPublicUserInfo(userId: string): Promise<PublicUser | null> {
    return new Promise((res) => {
      const user = UserDB.find((user) => user.id === userId);
      if (!user) {
        return res(null);
      }

      return res({
        id: user?.id,
        name: user?.name,
      });
    });
  }
}
