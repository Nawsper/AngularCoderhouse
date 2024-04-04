import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    if (this.myForm.status == 'VALID') alert('Formulario enviado');
    else alert('Completar todos los campos requeridos');
  }
}
