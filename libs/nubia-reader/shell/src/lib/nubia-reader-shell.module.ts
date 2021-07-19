import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { GamebookDataAccessModule } from '@nubia/nubia-reader/shared/data-access';

export const nubiaReaderShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    GamebookDataAccessModule,
  ],
})
export class NubiaReaderShellModule {}
