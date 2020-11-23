import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../app/dashboard/inventory/User';

@Pipe({
    name: 'tableFilter'

})
export class TableFilterPipe implements PipeTransform {
    transform(
        user: any,
        search_id: string
    ): User[] {

        if (!user || !search_id) {
            return user;
        }
        return user.filter(user =>
            user.userId.toLowerCase().indexOf(search_id.toLowerCase()) !== -1);

    }

}




