import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tableFilter",
})
export class TableFilterPipe implements PipeTransform {
  transform(user: any, cityName: string): typeof user {
    if (!user || !cityName) {
      return user;
    }
    return user.filter(
      (user) =>
        user.cityName.toLowerCase().indexOf(cityName.toLowerCase()) !== -1
    );
  }
}
