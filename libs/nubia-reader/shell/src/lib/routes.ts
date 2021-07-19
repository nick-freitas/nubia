import { Route } from '@angular/router';

export const nubiaReaderShellRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: async () =>
      (await import('@nubia/nubia-reader/home')).NubiaReaderHomeModule,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
