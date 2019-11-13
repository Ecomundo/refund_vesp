import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
      FormsModule,
      HttpClientModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      PAGES_ROUTES
    ],
    declarations: [
      PagesComponent,
      DashboardComponent
    ],
    exports: [
      PagesComponent,
      DashboardComponent
    ],
    providers: [
      DatePipe
    ]
  })
  export class PagesModule { }
