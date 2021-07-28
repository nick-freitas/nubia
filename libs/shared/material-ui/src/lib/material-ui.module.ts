import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatRippleModule],
  exports: [MatToolbarModule, MatButtonModule, MatRippleModule],
})
export class MaterialUIModule {}
