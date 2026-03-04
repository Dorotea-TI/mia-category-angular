// import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';

import { AppComponent } from './app.component';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaCategoryEditorModule } from '@doroteati/mia-category-editor';
import { MiaCategoryCoreModule } from '@doroteati/mia-category-core';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MiaCategoryCoreModule,
        MiaCategoryEditorModule], providers: [
        {
            provide: MIA_CORE_PROVIDER,
            useValue: {
                baseUrl: 'http://dorotea.test/',
            },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideClientHydration(withEventReplay()),
    ] })
export class AppModule {}
