import { Test, TestingModule } from '@nestjs/testing';
import { GamebookLibraryService } from './gamebook-library.service';

describe('GamebookLibraryService', () => {
  let service: GamebookLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamebookLibraryService],
    }).compile();

    service = module.get<GamebookLibraryService>(GamebookLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
