import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../dashboard/inventory/User';

@Pipe({
    name: 'tableFilter'

})
export class TableFilterPipe implements PipeTransform {
    transform(
        // user: User[],
        user: any,
        search_id: string
    ): User[] {

        if (!user || !search_id) {
            return user;
        }
        return user.filter(user =>
            user.userId.toLowerCase().indexOf(search_id.toLowerCase()) !== -1);
        // if (!user) return [];
        // if (!search_location) return user;
        // search_location = search_location.toLocaleLowerCase();
        // user = [...user.filter(user => user.Location.toLocaleLowerCase().includes(search_location))];

        // if (!search_area) return user;
        // search_area = search_area.toLocaleLowerCase();
        // user = [...user.filter(user => user.Area.toLocaleLowerCase().includes(search_area))];

        // return user;

    }

}


// import { Pipe, PipeTransform } from '@angular/core';
// import { InventoryComponent } from '../dashboard/inventory/inventory.component';

// @Pipe({
//     name: 'tableFilter'
// })
// export class TableFilterPipe implements PipeTransform {

//     transform(user: user[], location: string) {
//         return null;
//     }

// }





