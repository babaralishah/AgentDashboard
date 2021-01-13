import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterlist",
})
export class FilterPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {
    if (!term) return value;
    // console.log("filter--->",keys)
    let i = 0;

    // if(value[i].city[0].city){
    //   keys = "city.city"
    // }

    return (value || []).filter((item) =>
      keys
        .split(",")
        .some(
          (key) =>
            item.hasOwnProperty(key) && new RegExp(term, "gi").test(item[key])
        )
    );
  }
}
