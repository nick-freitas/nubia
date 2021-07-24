import { User } from '@nubia/shared/api-interfaces';

export const UserDB: User[] = [
  {
    id: '1',
    username: 'nfreitas',
    password: '$2y$12$nYlCTliMhLx0cwVcBTDKZON6UGEVqOfugbhNjkwsCraHg0Whwb1Ea',
    name: 'Nick Freitas',
    gamebookLibraryIds: ['2', '4'],
  },
  {
    id: '2',
    username: 'gmelcher',
    password: '$2y$12$eywrE8YQuqJLxWrY2WS9wuo11jgTpifC3UrCIafNmIqI9HfGMmboa',
    name: 'Geena Melcher',
    gamebookLibraryIds: ['1'],
  },
  {
    id: '3',
    username: 'nbellemsieh',
    password: '$2y$12$sb1WeB8.xE6Pb6a2Q0Lhkuqaf1wdThz9zquXLs6tQxKDwp2om5oem',
    name: 'Naizak Bellemsieh',
    gamebookLibraryIds: ['3'],
  },
];
