import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionFeature } from './store/inscripciones.reducer';

@NgModule({
  declarations: [InscripcionesComponent],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MatProgressBarModule,
    SharedModule,
    EffectsModule.forFeature([InscripcionEffects]),
    StoreModule.forFeature(inscripcionFeature),
  ],
})
export class InscripcionesModule {}
