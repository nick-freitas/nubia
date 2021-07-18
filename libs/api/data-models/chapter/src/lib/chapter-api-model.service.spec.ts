import { Test, TestingModule } from '@nestjs/testing';
import { Chapter } from '@nubia/shared/api-interfaces';
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

  it('should return Dont Let Go for chapter 1', async () => {
    const chapter: Chapter = await service.getById('1');
    expect(chapter).toMatchObject({
      id: '1',
      gamebookId: '1',
      title: "Don't Let Go",
    });
  });

  it('should return 2 chapters for Gamebook 2', async () => {
    const chapters: Chapter[] = await service.getByGamebookId('2');
    expect(chapters.length).toBe(2);
    expect(chapters.find((c) => c.id === '3')).toMatchObject({
      id: '3',
      gamebookId: '2',
      title: 'Do you remember',
    });
  });
});
