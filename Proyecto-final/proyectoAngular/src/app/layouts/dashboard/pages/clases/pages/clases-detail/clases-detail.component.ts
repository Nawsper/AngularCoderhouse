import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from '../../clases.service';
import { Observable, finalize } from 'rxjs';
import { IClase } from '../../models/clase.model';

@Component({
  selector: 'app-clases-detail',
  templateUrl: './clases-detail.component.html',
  styleUrl: './clases-detail.component.scss',
})
export class ClasesDetailComponent {
  clase$: Observable<IClase | undefined>;

  loading = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private clasesService: ClasesService
  ) {
    this.loading = true;
    this.clase$ = this.clasesService
      .getClaseById(this.activateRoute.snapshot.params['id'])
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      );
  }
}
