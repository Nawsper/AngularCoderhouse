import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'danceacademy',
    component: DashboardComponent,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./layouts/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
