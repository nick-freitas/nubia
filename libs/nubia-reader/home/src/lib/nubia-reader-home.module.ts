import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '@nubia/nubia-reader/shared/ui';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { BookShelfBookComponent } from './book-shelf-book/book-shelf-book.component';

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
  declarations: [HomeComponent, BookShelfComponent, BookShelfBookComponent],
})
export class NubiaReaderHomeModule {}
