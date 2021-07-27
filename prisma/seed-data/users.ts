import { User } from '@prisma/client';

export const users: User[] = [
  {
    id: '1',
    email: 'n@fake-email.com',
    username: 'nick',
    password: 'Password',
    name: 'Nick',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '2',
    email: 'g@fake-email.com',
    username: 'geena',
    password: 'Password',
    name: 'Geena',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '3',
    email: 'n2@fake-email.com',
    username: 'naizak',
    password: 'Password',
    name: 'Naizak',
    createdAt: new Date(),
    active: true,
  },
];
