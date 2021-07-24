import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@nubia/nubia-reader/ui';
import { BookShelfBookComponent } from './book-shelf-book/book-shelf-book.component';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookShelfComponent,
      },
    ]),
    HeaderModule,
  ],
  declarations: [BookShelfComponent, BookShelfBookComponent],
})
export class NubiaReaderBookShelfModule {}
