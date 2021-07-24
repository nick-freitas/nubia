import { Route } from '@angular/router';

export const nubiaReaderShellRoutes: Route[] = [
  {
    path: 'book-shelf',
    loadChildren: async () =>
      (await import('@nubia/nubia-reader/features/book-shelf'))
        .NubiaReaderBookShelfModule,
  },
  {
    path: 'read',
    loadChildren: async () =>
      (await import('@nubia/nubia-reader/features/reading'))
        .NubiaReaderReadingModule,
  },
  {
    path: '',
    redirectTo: '/book-shelf',
    pathMatch: 'full',
  },
];
