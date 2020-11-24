import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tableFilter02'
})
export class TableFilter02Pipe implements PipeTransform {

  transform(
    // user: User[],
    user: any,
    search_location: string
  ): typeof user {

    if (!user || !search_location) {
      return user;
    }
    return user.filter(user =>
      user.location.toLowerCase().indexOf(search_location.toLowerCase()) !== -1);

  }

}