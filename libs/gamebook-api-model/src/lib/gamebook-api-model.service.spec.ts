import { Test } from '@nestjs/testing';
import { PublicUser } from '../../../api-interfaces/src';
import { UserApiModelModule } from '../../../user-api-model/src';
import { GamebookApiModelService } from './gamebook-api-model.service';

describe('GamebookApiModelService', () => {
  let service: GamebookApiModelService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [GamebookApiModelService],
      imports: [UserApiModelModule],
    }).compile();

    service = module.get(GamebookApiModelService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should return The Crowned Siren for id "1"', async () => {
    const expectedAuthor: PublicUser = {
      id: '1',
      name: 'Nick Freitas',
    };

    const gb = await service.getById('1');
    expect(gb).toMatchObject({
      id: '1',
      title: 'The Crowned Siren',
      authorId: expectedAuthor.id,
      author: expectedAuthor,
    });
  });

  it('should find no gamebook for id "not-real"', async () => {
    const gb = await service.getById('not-real');
    expect(gb).toBeNull();
  });

  it('should have 3 gamebooks for authorId "1"', async () => {
    const gb = await service.getByAuthorId('1');
    expect(gb?.length).toEqual(3);
  });

  it('should have no gamebooks for authorId "not-real"', async () => {
    const gb = await service.getByAuthorId('not-real');
    expect(gb?.length).toEqual(0);
  });
});
