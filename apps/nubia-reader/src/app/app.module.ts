import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NubiaReaderShellModule } from '@nubia/nubia-reader/shell';
import { AppComponent } from './app.component';

const apiUrlInjectionToken = new InjectionToken<string>('ApiUrl');
const apiUrl = 'http://localhost:3333/api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NubiaReaderShellModule],
  bootstrap: [AppComponent],
  providers: [{ provide: apiUrlInjectionToken, useValue: apiUrl }],
})
export class AppModule {}
