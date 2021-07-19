import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule } from '@angular/router';
import { LibraryDataAccessModule } from '@nubia/nubia-reader/shared/data-access/library';
import { nubiaReaderShellRoutes } from './routes';

const routerOptions: ExtraOptions = {
  enableTracing: true,
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'top',
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(nubiaReaderShellRoutes, routerOptions),
    LibraryDataAccessModule,
  ],
  exports: [RouterModule],
})
export class NubiaReaderShellModule {}
