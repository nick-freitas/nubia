import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NubiaReaderShellModule } from '@nubia/nubia-reader/shell';
import { AppComponent } from './app.component';
import { ApiUrlInjectionToken } from '@nubia/nubia-reader/shared/tokens';

const apiUrl = 'http://localhost:3333/api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NubiaReaderShellModule],
  bootstrap: [AppComponent],
  providers: [{ provide: ApiUrlInjectionToken, useValue: apiUrl }],
})
export class AppModule {}
