import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';
import { provideMiaForm } from '@doroteati/mia-form';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideMiaForm(),
    {
      provide: MIA_CORE_PROVIDER,
      useValue: {
        baseUrl: 'http://localhost/',
      },
    },
  ],
}).catch((err) => console.error(err));
