import { Test } from '@nestjs/testing';
import { ApiModelProgressionApiModelService } from './api-model-progression-api-model.service';

describe('ApiModelProgressionApiModelService', () => {
  let service: ApiModelProgressionApiModelService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiModelProgressionApiModelService],
    }).compile();

    service = module.get(ApiModelProgressionApiModelService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
