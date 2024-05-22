import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./pages/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'clases',
        loadChildren: () =>
          import('./pages/clases/clases.module').then((m) => m.ClasesModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'inscripciones',
        loadChildren: () =>
          import('./pages/inscripciones/inscripciones.module').then(
            (m) => m.InscripcionesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
