import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../dashboard/inventory/User';
@Pipe({
  name: 'tableFilter05'
})
export class TableFilter05Pipe implements PipeTransform {

  transform(
    user: User[],
    search_demand: string
  ): User[] {

    if (!user || !search_demand) {
      return user;
    }
    return user.filter(user =>
      user.Demand.toLowerCase().indexOf(search_demand.toLowerCase()) !== -1);

  }

}