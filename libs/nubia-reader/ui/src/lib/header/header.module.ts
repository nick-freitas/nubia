import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header.component';
import { MaterialUIModule } from '@nubia/shared/material-ui';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialUIModule],
  exports: [HeaderComponent, RouterModule],
})
export class HeaderModule {}
