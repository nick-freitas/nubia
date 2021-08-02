import { Test } from '@nestjs/testing';
import { ApiAuthController } from './api-api-auth.controller';
import { ApiAuthService } from './api-api-auth.service';

describe('ApiAuthController', () => {
  let controller: ApiAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAuthService],
      controllers: [ApiAuthController],
    }).compile();

    controller = module.get(ApiAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
