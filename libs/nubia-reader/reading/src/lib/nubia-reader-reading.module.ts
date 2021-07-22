import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReadingComponent } from './reading/reading.component';
import { HeaderModule } from '@nubia/nubia-reader/shared/ui';
import { LibraryDataAccessModule } from '@nubia/nubia-reader/shared/data-access/gamebook-library';
export const nubiaReaderReadingRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ReadingComponent,
      },
      // todo: do we care about handling no ids? redirect somewhere?
    ]),
    HeaderModule,
    LibraryDataAccessModule,
  ],
  declarations: [ReadingComponent],
})
export class NubiaReaderReadingModule {}
