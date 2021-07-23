import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule, //.forRoot({}, {}),
    EffectsModule, //.forRoot([]),
    EntityDataModule, //.forRoot({ entityMetadata }),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [EntityDataModule, StoreModule],
})
export class NubiaReaderGamebookLibraryStoreModule {}
