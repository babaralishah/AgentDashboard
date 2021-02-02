import { formatDate } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "areaFilter",
})
export class TableAreaPipe implements PipeTransform {
  transform(data: any, areaUnit: any, minArea: any, maxArea: any): typeof data {
    if ((!minArea && !maxArea) || !areaUnit || !data) {
      console.log("Empty");
      return data;
    }

    const areaSearchedData = this.areaInSqFeet(areaUnit, minArea, maxArea);
    console.log(areaSearchedData);

    return data.filter((element) => {
      // if(element.area_unit !== areaUnit) {
      // return;
      // }
      const areaElementData = this.areaInSqFeet(
        element.area_unit,
        element.min_area,
        element.max_area,
        element.area
      );
      console.log(areaElementData);

      if (areaSearchedData.minArea && areaSearchedData.maxArea) {
        if (areaElementData.minArea && areaElementData.maxArea) {
          if (
            areaSearchedData.minArea <= areaElementData.minArea &&
            areaSearchedData.maxArea >= areaElementData.maxArea
          )
            return element;
        } else {
          if (
            areaSearchedData.minArea <= areaElementData.area &&
            areaSearchedData.maxArea >= areaElementData.area
          ) {
            return element;
          }
        }
      } else if (areaSearchedData.minArea) {
        if (areaElementData.minArea) {
          if (areaSearchedData.minArea <= areaElementData.minArea)
            return element;
        } else {
          if (areaSearchedData.minArea <= areaElementData.area) {
            return element;
          }
        }
      } else if (areaSearchedData.maxArea) {
        if (element.max_area) {
          if (areaSearchedData.maxArea >= areaElementData.maxArea)
            return element;
        } else {
          if (areaSearchedData.maxArea >= areaElementData.area) {
            return element;
          }
        }
      }
    });
  }

  areaInSqFeet(areaUnit, minArea?, maxArea?, area?) {
    console.log(areaUnit, minArea, maxArea, area);
    if (areaUnit == "null") {
      minArea = null;
      maxArea = null;
      area = null;
      console.log(areaUnit);
    } else if (areaUnit == "Marla") {
      console.log(minArea, maxArea, area);
      minArea = minArea * 250;
      maxArea = maxArea * 250;
      area = area * 250;
      console.log(minArea, maxArea, area);
    } else if (areaUnit == "Kanal") {
      console.log(minArea, maxArea, area);
      minArea = minArea * 5000;
      maxArea = maxArea * 5000;
      area = area * 5000;
      console.log(minArea, maxArea, area);
    } else if (areaUnit == "Sq.Yard") {
      console.log(minArea, maxArea, area);
      minArea = minArea * 9;
      maxArea = maxArea * 9;
      area = area * 9;
      console.log(minArea, maxArea, area);
    } else if (areaUnit == "Sq.Feet") {
      console.log(minArea, maxArea, area);
      minArea = minArea * 1;
      maxArea = maxArea * 1;
      area = area * 1;
      console.log(minArea, maxArea, area);
    }
    return { minArea, maxArea, area };
  }
}
