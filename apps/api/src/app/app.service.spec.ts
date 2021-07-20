import { Test } from '@nestjs/testing';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [GamebookApiModelModule],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('AppService', () => {
    it('gets the gamebooks when calling library', async () => {
      const userId = '1';
      const library = await service.getLibraryGamebook(userId);
      expect(library.length).toBeGreaterThan(1);
    });
  });
});
