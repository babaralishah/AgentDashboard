import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter04'
})
export class TableFilter04Pipe implements PipeTransform {

  transform(
    // user: User[],,
    user: any,
    search_type: string
  ): typeof user {

    if (!user || !search_type) {
      return user;
    }
    return user.filter(user =>
      user.contact.toLowerCase().indexOf(search_type.toLowerCase()) !== -1);

  }

}