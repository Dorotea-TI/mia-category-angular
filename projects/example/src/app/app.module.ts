// import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';
import { MIA_CORE_PROVIDER } from '@doroteati/mia-core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiaCategoryCoreModule } from 'projects/doroteati/mia-category-core/src/public-api';
import { MiaCategoryEditorModule } from 'projects/doroteati/mia-category-editor/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MiaCategoryCoreModule,
    // MiaCategoryEditorModule,
  ],
  providers: [
    {
      provide: MIA_CORE_PROVIDER,
      useValue: {
        baseUrl: 'https://dorotea-interno.uc.r.appspot.com/',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
