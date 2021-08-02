import { InjectionToken } from '@angular/core';

export const ApiUrlInjectionToken = new InjectionToken<string>('ApiUrl');
export const ReaderApiUrlInjectionToken = new InjectionToken<string>(
  'ReaderApiUrl'
);
