import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'demandFilter'
})
export class TableDemandPipe implements PipeTransform {
    transform(
        data: any,
        minDemand: any,
        maxDemand: any
    ): typeof data {

        if (!minDemand && !maxDemand || !data) {
            console.log('Empty');
            return data;
        }

        return data.filter(element => {
            if (minDemand && maxDemand) {
                if(element.min_price && element.max_price) {
                    if(minDemand <= element.min_price && maxDemand >= element.max_price)
                        return element;
                } else {
                    if(minDemand <= element.demand && maxDemand >= element.demand) {
                        return element;
                    }
                }
            } else if (minDemand) {
                if(element.min_price) {
                    if(minDemand <= element.min_price)
                        return element;
                } else {
                    if(minDemand <= element.demand) {
                        return element;
                    }
                }
            } else if (maxDemand) {
                if(element.max_price) {
                    if(maxDemand >= element.max_price)
                        return element;
                } else {
                    if(maxDemand >= element.demand) {
                        return element;
                    }
                }
            }
        });
    }
}



