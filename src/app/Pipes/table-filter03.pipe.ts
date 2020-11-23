import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../dashboard/inventory/User';

@Pipe({
  name: 'tableFilter03'
})
export class TableFilter03Pipe implements PipeTransform {

  transform(
    user: User[],
    search_area: string
  ): User[] {

    if (!user || !search_area) {
      return user;
    }
    return user.filter(user =>
      user.Area.toLowerCase().indexOf(search_area.toLowerCase()) !== -1);

  }

}
