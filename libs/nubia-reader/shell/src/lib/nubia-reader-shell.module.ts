import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule } from '@angular/router';
import { DefaultDataServiceConfig, EntityMetadataMap } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';
import { nubiaReaderShellRoutes } from './routes';
import { ApiUrlInjectionToken } from '@nubia/nubia-reader/shared/tokens';
import { HttpClientModule } from '@angular/common/http';

const routerOptions: ExtraOptions = {
  enableTracing: true,
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'top',
};

export const entityMetadata: EntityMetadataMap = {
  Gamebook: {
    entityName: 'Gamebook',
  },
};

const defaultDataServiceConfig = (ApiUrlInjectionToken: string) => {
  return {
    root: `${ApiUrlInjectionToken}/gamebook-library`,
    timeout: 3000, // request timeout
  };
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(nubiaReaderShellRoutes, routerOptions),
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
  exports: [RouterModule],
})
export class NubiaReaderShellModule {}
