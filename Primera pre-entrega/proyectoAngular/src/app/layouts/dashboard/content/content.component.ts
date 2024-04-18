import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  danzas = [
    'Danzas Clásicas',
    'Danzas Contemporaneas',
    'Urbano',
    'Danzas Arabes',
    'Danzas Folkloricas',
    'Infantiles',
  ];

  mostrar: { [key: string]: boolean } = {};

  alumnosPorDanza: { [key: string]: string[] } = {
    'Danzas Clásicas': ['Sofía', 'Leandro', 'Amelia', 'Camilo'],
    Urbano: ['Laura', 'Pablo', 'Estefania'],
    'Danzas Folkloricas': ['Esteban', 'Mariana', 'Luciana', 'Camilo'],
    Infantiles: ['Juana', 'Diego'],
  };

  constructor() {
    this.danzas.forEach((danza) => {
      this.mostrar[danza] = false;
    });
  }

  clickMostrar(danza: string) {
    this.mostrar[danza] = !this.mostrar[danza];
  }

  alumnosByDanza(danza: string): string[] {
    return this.alumnosPorDanza[danza] || ['Sin alumnos'];
  }
}
