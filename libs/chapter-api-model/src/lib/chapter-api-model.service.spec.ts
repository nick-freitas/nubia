import { Test, TestingModule } from '@nestjs/testing';
import { ChapterApiModelService } from './chapter-api-model.service';

describe('ChapterApiModelService', () => {
  let service: ChapterApiModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterApiModelService],
    }).compile();

    service = module.get<ChapterApiModelService>(ChapterApiModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
