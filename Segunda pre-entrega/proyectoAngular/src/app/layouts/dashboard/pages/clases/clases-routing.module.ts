import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { ClasesDetailComponent } from './pages/clases-detail/clases-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClasesComponent,
  },
  {
    path: ':id',
    component: ClasesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesRoutingModule {}
