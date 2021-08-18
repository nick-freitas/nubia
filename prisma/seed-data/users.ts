import { User } from '@prisma/client';

export const users: User[] = [
  {
    id: '1',
    email: 'n@fake-email.com',
    username: 'nick',
    password: '$2a$12$Zp9kguNh81b0TbzP4qxgje4/7m9hxXYU1G2YE.ynM.w2aLtvzknAu',
    name: 'Nick',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '2',
    email: 'g@fake-email.com',
    username: 'geena',
    password: '$2a$12$Zp9kguNh81b0TbzP4qxgje4/7m9hxXYU1G2YE.ynM.w2aLtvzknAu',
    name: 'Geena',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '3',
    email: 'n2@fake-email.com',
    username: 'naizak',
    password: '$2a$12$Zp9kguNh81b0TbzP4qxgje4/7m9hxXYU1G2YE.ynM.w2aLtvzknAu',
    name: 'Naizak',
    createdAt: new Date(),
    active: true,
  },
];
