import { BadRequestException, Injectable } from '@nestjs/common';
import { PublicUser, User } from '@nubia/shared/api-interfaces';
import { ApiDbClientService } from '@nubia/api/db-client';

@Injectable()
export class UserApiModelService {
  constructor(private readonly apiDbClientService: ApiDbClientService) {}

  public async _getFullList(): Promise<User[]> {
    return this.apiDbClientService.user.findMany();
  }

  public async getFullUserByUserName(username: string): Promise<User | null> {
    if (!username) {
      throw new BadRequestException('Missing username');
    }

    return this.apiDbClientService.user.findFirst({
      where: { username: username },
    });
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
    return !!gb?.id;
  }
}
