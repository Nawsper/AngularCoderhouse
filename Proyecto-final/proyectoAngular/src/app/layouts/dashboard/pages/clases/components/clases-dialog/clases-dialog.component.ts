import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClase } from '../../models/clase.model';
import { ClasesService } from '../../clases.service';
import { InscripcionesService } from '../../../inscripciones/inscripcciones.service';

@Component({
  selector: 'app-clases-dialog',
  templateUrl: './clases-dialog.component.html',
  styleUrl: './clases-dialog.component.scss',
})
export class ClasesDialogComponent implements OnInit {
  clasesForm: FormGroup;
  clases: IClase[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<ClasesDialogComponent>,
    private clasesService: ClasesService,
    private inscripcionesService: InscripcionesService,
    @Inject(MAT_DIALOG_DATA) private signUpClass?: IClase
  ) {
    console.log(signUpClass);

    this.clasesForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        ],
      ],
      clases: [''],
    });

    if (signUpClass) {
      this.clasesForm.patchValue(signUpClass);
    }
  }

  ngOnInit(): void {
    this.loadClases();
  }

  onSave(): void {
    if (this.clasesForm.invalid) {
      this.clasesForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.clasesForm.value);
    }
  }

  createInscrip() {
    this.inscripcionesService
      .createInscrip(this.clasesForm.getRawValue())
      .subscribe({
        next: (inscrip) => {
          console.log(inscrip);
        },
        error: () => {},
        complete: () => {
          this.matDialogRef.close(this.clasesForm.value);
        },
      });
  }

  loadClases() {
    this.clasesService.getClases().subscribe({
      next: (clases) => {
        console.log('Clases cargadas:', clases);
        this.clases = clases;
      },
    });
  }
}
