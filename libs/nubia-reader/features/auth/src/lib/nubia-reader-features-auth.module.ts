import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const nubiaReaderFeaturesAuthRoutes: Route[] = [{
  path:'login',
  component: null
}, {
  path: 'register',
  component: null
}
];

@NgModule({
  imports: [CommonModule, RouterModule],
})
export class NubiaReaderFeaturesAuthModule {}
