import { User } from '@prisma/client';

export const users: User[] = [
  {
    id: '1',
    email: 'n@fake-email.com',
    username: 'nick',
    password: '$2y$12$ALUdDdCV/AfUlaB6dVDZCelvrUzRnUB5nR4v1W/0GwQXk0ZTA9hcS',
    name: 'Nick',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '2',
    email: 'g@fake-email.com',
    username: 'geena',
    password: '$2y$12$1k1d2gr0MH4QQkqYluBgReMVqDNL9b6U18EFhPRg6o0MVU5cB0OVC',
    name: 'Geena',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '3',
    email: 'n2@fake-email.com',
    username: 'naizak',
    password: '$2y$12$kZUPN111C3lFFmzQF2AM2.AtNxXOQ/HVKAGW/x6sH0kvDf6AI4fBu',
    name: 'Naizak',
    createdAt: new Date(),
    active: true,
  },
];
