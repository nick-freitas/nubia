import { Injectable } from '@nestjs/common';
import { PublicUser, User } from '@nubia/shared/api-interfaces';
import { ApiDbClientService } from '@nubia/api/db-client';

@Injectable()
export class UserApiModelService {
  constructor(private readonly apiDbClientService: ApiDbClientService) {}

  public async _getFullList(): Promise<User[]> {
    return this.apiDbClientService.user.findMany();
  }

  public async login(username: string, password: string): Promise<void> {
    if (!username || !password) {
      throw new Error('Missing username or password');
    }

    throw new Error('Not Yet Implemented');
  }

  public async getPublicUserInfo(userId: string): Promise<PublicUser | null> {
    return this.apiDbClientService.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true },
    });
  }

  public async getIsOwnedGamebok(
    userId: string,
    gamebookId: string
  ): Promise<boolean> {
    const gb = await this.apiDbClientService.gamebook.findFirst({
      where: { AND: [{ id: gamebookId }, { authorId: userId }] },
    });
    return !!gb.id;
  }
}
