import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule } from '@angular/router';
import { GamebookDataAccessModule } from '@nubia/nubia-reader/shared/data-access/gamebook';
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
    GamebookDataAccessModule,
  ],
  exports: [RouterModule],
})
export class NubiaReaderShellModule {}
