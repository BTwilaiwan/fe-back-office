import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';


class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,   
        options: {
          darkModeSelector: '.dark' 
        }
      }
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'th',
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new CustomTranslateLoader(http),
          deps: [HttpClient]
        }
      })
    )
  ]
};
