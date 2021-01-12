import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'LocationFilter'
})
export class TableFilter02Pipe implements PipeTransform {

  transform(
    // user: User[],
    user: any,
    locationName: string
  ): typeof user {

    if (!user || !locationName) {
      return user;
    }
    return user.filter(user =>
      user.locationName.toLowerCase().indexOf(locationName.toLowerCase()) !== -1);

  }

}