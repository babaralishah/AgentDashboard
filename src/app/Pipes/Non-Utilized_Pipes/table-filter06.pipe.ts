import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter06'
})
export class TableFilter06Pipe implements PipeTransform {

  transform(
    // user: User[],,
    user: any,
    search_client: string
  ): typeof user {

    if (!user || !search_client) {
      return user;
    }
    return user.filter(user =>
      user.fullname.toLowerCase().indexOf(search_client.toLowerCase()) !== -1);

  }

}