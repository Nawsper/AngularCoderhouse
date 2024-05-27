import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../../../environments/environment';

describe('UsersService', () => {
  let usersService: UsersService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [HttpClientTestingModule],
    });
    usersService = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('Debe realizar una peticion GET a la url {apiUrl}/users mediante getUsers', () => {
    usersService.getUsers().subscribe({
      next: (resp) => {
        expect(Array.isArray(resp)).toBeTrue();
      },
    });

    httpTestingController
      .expectOne({
        method: 'GET',
        url: environment.baseAPIURL + '/users',
      })
      .flush([]);
  });
});
