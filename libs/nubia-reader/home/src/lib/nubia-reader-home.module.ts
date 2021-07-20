import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderModule } from '@nubia/nubia-reader/shared/ui';
import { BookShelfComponent } from './book-shelf/book-shelf.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
    HeaderModule,
  ],
  declarations: [HomeComponent, BookShelfComponent],
})
export class NubiaReaderHomeModule {}
