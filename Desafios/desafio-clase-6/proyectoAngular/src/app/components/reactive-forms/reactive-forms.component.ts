import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  myForm = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    lastName: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [
      Validators.email,
      Validators.required,
    ]),
  });

  get nameControl() {
    return this.myForm.get('name');
  }

  get lastNameControl() {
    return this.myForm.get('lastName');
  }

  get emailControl() {
    return this.myForm.get('email');
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    if (this.myForm.status == 'VALID')
      Swal.fire({
        icon: 'success',
        title: 'OK',
        text: 'Formulario enviado',
      });
    else
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completar todos los campos requeridos',
      });
  }
}
