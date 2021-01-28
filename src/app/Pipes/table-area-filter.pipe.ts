import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'areaFilter'
})
export class TableAreaPipe implements PipeTransform {
    transform(
        data: any,
        areaUnit: any,
        minArea: any,
        maxArea: any
    ): typeof data {

        if (!minArea && !maxArea || !areaUnit || !data) {
            console.log('Empty');
            return data;
        }

        const areaSearchedData = this.areaInSqFeet(areaUnit, minArea, maxArea);
        console.log(areaSearchedData);

        return data.filter(element => {
            // if(element.area_unit !== areaUnit) {
            //     return;
            // }
            const areaElementData = this.areaInSqFeet(element.area_unit, element.min_area, element.max_area, element.area);
            console.log(areaElementData);
    
            
            if (minArea && maxArea) {
                if(areaElementData.minArea && areaElementData.maxArea) {
                    if(minArea <= areaElementData.minArea && maxArea >= areaElementData.maxArea)
                        return element;
                } else {
                    if(minArea <= areaElementData.area && maxArea >= areaElementData.area) {
                        return element;
                    }
                }
            } else if (minArea) {
                if(areaElementData.minArea) {
                    if(minArea <= areaElementData.minArea)
                        return element;
                } else {
                    if(minArea <= areaElementData.area) {
                        return element;
                    }
                }
            } else if (maxArea) {
                if(element.max_area) {
                    if(maxArea >= areaElementData.maxArea)
                        return element;
                } else {
                    if(maxArea >= areaElementData.area) {
                        return element;
                    }
                }
            }
        });
    }

    areaInSqFeet(areaUnit, minArea?, maxArea?, area?) {
        
        console.log(areaUnit, minArea, maxArea, area);
        if (areaUnit == 'null') {
            minArea = null;
            maxArea = null;
            area = null;
          } else if (areaUnit == 'Marla') {
            minArea = minArea * 250;
            maxArea = maxArea * 250;
            area = area * 250;
          } else if (areaUnit == 'Kanal') {
            minArea = minArea * 5000;
            maxArea = maxArea * 5000;
            area = area * 5000;
          } else if (areaUnit == 'Sq. Yard') {
            minArea = minArea * 9;
            maxArea = maxArea * 9;
            area = area * 9;
          } else if (areaUnit == 'Sq. Feet') {
            minArea = minArea * 1;
            maxArea = maxArea * 1;
            area = area * 1;
          }
          return {minArea, maxArea, area};
    }
}



