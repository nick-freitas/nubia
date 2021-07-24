import { Component } from '@angular/core';

@Component({
  selector: 'reader-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}
