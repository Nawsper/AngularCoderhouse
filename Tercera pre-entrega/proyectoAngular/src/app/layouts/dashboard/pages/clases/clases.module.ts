import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesComponent } from './clases.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../../../shared/shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClasesDialogComponent } from './components/clases-dialog/clases-dialog.component';

@NgModule({
  declarations: [ClasesComponent, ClasesDialogComponent],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    MatListModule,
    SharedModule,
    MatProgressBarModule,
  ],
})
export class ClasesModule {}
