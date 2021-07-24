import { Injectable } from '@nestjs/common';
import { PublicUser } from '@nubia/shared/api-interfaces';
import { UserDB } from './data';

@Injectable()
export class UserApiModelService {
  async login(username: string, password: string): Promise<void> {
    if (!username || !password) {
      throw new Error('Missing username or password');
    }

    throw new Error('Not Yet Implemented');
  }

  async getPublicUserInfo(userId: string): Promise<PublicUser | null> {
    const { id, name }: PublicUser = UserDB?.find((user) => user.id === userId);

    return { id, name };
  }

  async getGamebookIds(userId: string): Promise<Array<string>> {
    return UserDB?.find((u) => u.id === userId)?.gamebookLibraryIds;
  }

  async getIsOwnedGamebok(
    userId: string,
    gamebookId: string
  ): Promise<boolean> {
    return (
      UserDB?.findIndex(
        (u) => u.id === userId && u.gamebookLibraryIds.includes(gamebookId)
      ) !== -1
    );
  }
}
