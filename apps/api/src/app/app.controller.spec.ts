import { Test, TestingModule } from '@nestjs/testing';
import { GamebookApiModelModule } from '@nubia/api/data-models/gamebook';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [GamebookApiModelModule],
    }).compile();
  });

  describe('AppController', () => {
    it('gets the gamebooks when calling library', async () => {
      const appController = app.get<AppController>(AppController);
      const library = await appController.getLibraryGamebook();
      expect(library.length).toBeGreaterThan(1);
    });
  });
});
