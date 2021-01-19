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
    return user.filter(user => {
      for(let i=0; i<user.locationName.length; i++) {
        console.log(user.locationName[i].toLowerCase(), ', ', locationName.toLowerCase());
        if(user.locationName[i].toLowerCase().indexOf(locationName.toLowerCase()) !== -1) {
          return user;
        }
      }
    })
  }
}