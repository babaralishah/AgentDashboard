import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tableFilter05'
})
export class TableFilter05Pipe implements PipeTransform {

  transform(
    user,
    search_demand: string
  ): typeof user {

    if (!user || !search_demand) {
      return user;
    }
    return user.filter(user =>
      user.Demand.toLowerCase().indexOf(search_demand.toLowerCase()) !== -1);

  }

}