import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClase } from '../../models/clase.model';

@Component({
  selector: 'app-clases-dialog',
  templateUrl: './clases-dialog.component.html',
  styleUrl: './clases-dialog.component.scss',
})
export class ClasesDialogComponent {
  clasesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<ClasesDialogComponent>,
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
    });

    if (signUpClass) {
      this.clasesForm.patchValue(signUpClass);
    }
  }

  onSave(): void {
    if (this.clasesForm.invalid) {
      this.clasesForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.clasesForm.value);
    }
  }
}
