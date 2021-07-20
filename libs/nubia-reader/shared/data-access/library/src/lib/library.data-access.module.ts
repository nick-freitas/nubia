import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiUrlInjectionToken } from '@nubia/nubia-reader/shared/tokens';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { entityMetadata } from './library-store.meta';

const defaultDataServiceConfig = (ApiUrlInjectionToken: string) => {
  return {
    root: `${ApiUrlInjectionToken}/library`,
    timeout: 3000, // request timeout
  };
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({ entityMetadata }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useFactory: defaultDataServiceConfig,
      deps: [ApiUrlInjectionToken],
    },
  ],
  exports: [EntityDataModule],
})
export class LibraryDataAccessModule {}
