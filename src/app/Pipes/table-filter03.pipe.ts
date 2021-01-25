import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  // name: 'tableFilter03'
  name: "nameFilter",
})
export class TableFilter03Pipe implements PipeTransform {
  transform(user: any, fullname: string): typeof user {
    if (!user || !fullname) {
      return user;
    }

    return user.filter((user) => {
      if (user.fullname) {
        return (
          user.fullname.toLowerCase().indexOf(fullname.toLowerCase()) !== -1
        );
      } else if (user.added_By.fullname) {
        return (
          user.added_By.fullname
            .toLowerCase()
            .indexOf(fullname.toLowerCase()) !== -1
        );
      }
    });
  }
}
