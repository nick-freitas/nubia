import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NubiaReaderShellModule } from '@nubia/nubia-reader/shell';
import { AppComponent } from './app.component';
import { ApiUrlInjectionToken } from '@nubia/nubia-reader/tokens';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NubiaReaderShellModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
  providers: [{ provide: ApiUrlInjectionToken, useValue: environment.apiUrl }],
})
export class AppModule {}
