import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialUIModule } from '@nubia/shared/material-ui';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    MaterialUIModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, RouterModule],
})
export class HeaderModule {}
