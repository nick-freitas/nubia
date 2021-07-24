import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeaderModule } from '@nubia/nubia-reader/ui';
import { LibraryDataAccessModule } from '@nubia/nubia-reader/data-access/gamebook-library';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReadingComponent } from './reading/reading.component';

export const nubiaReaderReadingRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
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
