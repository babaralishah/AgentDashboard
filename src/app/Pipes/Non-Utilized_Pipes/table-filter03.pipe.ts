import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter03'
})
export class TableFilter03Pipe implements PipeTransform {

  transform(
    user,
    search_area: string
  ): typeof user {

    if (!user || !search_area) {
      return user;
    }
    return user.filter(user =>
      user.Area.toLowerCase().indexOf(search_area.toLowerCase()) !== -1);

  }

}
