import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'property_type'
})
export class TableFilter04Pipe implements PipeTransform {

  transform(
    // user: User[],,
    user: any,
    property_type: string
  ): typeof user {

    if (!user || !property_type) {
      return user;
    }
    return user.filter(user =>
      user.property_type.toLowerCase().indexOf(property_type.toLowerCase()) !== -1);

  }

}