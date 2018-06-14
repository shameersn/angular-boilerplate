import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomInterceptor } from './shared/services/http.interceptor';
import { AppRoutesModule } from './app.routes.module';
import { CustomErrorHandler } from './shared/services/error.handler';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthService } from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
