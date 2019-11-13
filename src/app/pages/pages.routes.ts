import { Routes, RouterModule } from '@angular/router';

import { LoginService } from '../services/login.service';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginService],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ],
    },
  ];
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
