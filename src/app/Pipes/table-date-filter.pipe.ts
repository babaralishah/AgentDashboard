import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFilter'
})
export class TableDatePipe implements PipeTransform {
    transform(
        users: any,
        startDate: String,
        endDate: String
    ): typeof users {

        if (!startDate && !endDate || !users) {
            // console.log('Empty');
            return users;
        }
        
        return users.filter(user => {
            const createdAt = formatDate(new Date(user.created),'yyyy-MM-dd','en_US');

            if (startDate && endDate) {
                if(startDate <= createdAt && endDate >= createdAt) {
                    return user;
                }
            } else if (startDate) {
                if(startDate <= createdAt) {
                    return user;
                }
            } else if (endDate) {
                if(endDate >= createdAt) {
                    return user;
                }
            }
        });
    }
}



