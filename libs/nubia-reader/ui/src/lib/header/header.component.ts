import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'reader-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() pageTitle: string | undefined;
  @Input() buttonName: string | undefined;
  @Input() buttonLink: string | undefined;
}
