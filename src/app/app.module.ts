import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTES } from './app.routes';

import { PagesModule } from './pages/pages.module';

import { LoginService } from './services/login.service';
import { DashboardService } from './services/dashboard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [
    LoginService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
