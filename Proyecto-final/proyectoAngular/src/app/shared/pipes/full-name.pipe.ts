import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../layouts/dashboard/pages/users/models';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(user: IUser): string {
    if (user) {
      return `${user.firstName}${user.lastName}`;
    }
    return '';
  }
}
