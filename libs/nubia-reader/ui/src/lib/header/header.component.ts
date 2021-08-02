import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '@nubia/shared/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reader-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  userSwitchForm: FormGroup;
  userList$: Observable<User[]> | undefined;
  @Input() pageTitle: string | undefined;
  @Input() buttonName: string | undefined;
  @Input() buttonLink: string | undefined;

  constructor(private http: HttpClient) {
    this.userSwitchForm = new FormGroup({
      user: new FormControl(''),
    });
  }

  // TEMP for development
  ngOnInit() {
    this.userList$ = this.http
      .get<User[]>(
        'http://localhost:3333/reader-api/dev-use-only/full-user-list'
      )
      .pipe(
        tap((users) =>
          this.userSwitchForm.setValue({ user: users[0]?.username })
        )
      );
  }
}
