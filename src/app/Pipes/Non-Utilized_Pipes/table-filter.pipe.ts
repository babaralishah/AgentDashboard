import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter'

})
export class TableFilterPipe implements PipeTransform {
    transform(
        user: any,
        search_id: string
    ): typeof user {

        if (!user || !search_id) {
            return user;
        }
        return user.filter(user =>
            user.userId.toLowerCase().indexOf(search_id.toLowerCase()) !== -1);

    }

}




