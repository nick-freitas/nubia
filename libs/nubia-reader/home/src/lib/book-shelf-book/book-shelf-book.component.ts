import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Gamebook } from '@nubia/shared/api-interfaces';

@Component({
  selector: 'nubia-book-shelf-book',
  templateUrl: './book-shelf-book.component.html',
  styleUrls: ['./book-shelf-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookShelfBookComponent {
  @Input() book: Gamebook | undefined;
}
