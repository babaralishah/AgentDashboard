import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../dashboard/inventory/User';
@Pipe({
  name: 'tableFilter04'
})
export class TableFilter04Pipe implements PipeTransform {

  transform(
    // user: User[],,
    user: any,
    search_type: string
  ): User[] {

    if (!user || !search_type) {
      return user;
    }
    return user.filter(user =>
      user.contact.toLowerCase().indexOf(search_type.toLowerCase()) !== -1);

  }

}