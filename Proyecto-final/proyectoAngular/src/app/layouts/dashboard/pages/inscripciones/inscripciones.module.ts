import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [InscripcionesComponent],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MatProgressBarModule,
    SharedModule,
  ],
})
export class InscripcionesModule {}
