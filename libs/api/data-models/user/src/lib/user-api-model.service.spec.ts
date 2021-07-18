import { Test, TestingModule } from '@nestjs/testing';
import { UserApiModelService } from './user-api-model.service';

describe('UserApiModelService', () => {
  let service: UserApiModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserApiModelService],
    }).compile();

    service = module.get<UserApiModelService>(UserApiModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Geena Melcher" for id "2"', async () => {
    const user = await service.getPublicUserInfo('2');
    expect(user).toMatchObject({ id: '2', name: 'Geena Melcher' });
  });

  it('should return no user for id "not-real"', async () => {
    const user = await service.getPublicUserInfo('not-real');
    expect(user).toBeNull();
  });
});
