import * as XLSX from "xlsx";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { JSON2SheetOpts } from "xlsx/types";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  general_search: string;
  data: any = [];
  deleteId: any;
  key: any;
  reverse: boolean = true;
  p: number = 1;
  startDate: String;
  endDate: String;

  currentLoginUser: any;

  @ViewChild('content') content: any;

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  user: any;

  options = [
    {
      value: "fullname",
      name: "Filter By Name",
      placeholder: "Name",
    },
    {
      value: "cityName",
      name: "Filter By City",
      placeholder: "City",
    },
    {
      value: "SubLocation",
      name: "Filter By Location",
      placeholder: "Location",
    },
  ];
  selectedOption = this.options[0].value;
  placeholder = this.options[0].placeholder;
  refId: any;

  ngOnInit(): void {
    this.tokenization();
    this.getUserList();
  }
  
  async tokenization() {
    const token = await this.authService.getToken();
    const decodedToken = await this.authService.getDecodedToken(token);
    this.currentLoginUser = decodedToken.data;
    console.log(this.currentLoginUser);
  }

  changeStartDate(e: any) {
    this.startDate = formatDate(new Date(e.target.value),'yyyy-MM-dd','en_US');
    // console.log('Start', this.startDate);
  }
  changeEndDate(e: any) {
    this.endDate= formatDate(new Date(e.target.value),'yyyy-MM-dd','en_US');
    // console.log('End', this.endDate);
  }

  optionChange(e: any) {
    this.placeholder = e.placeholder;
    this.refId = "";
    console.log(this.selectedOption);
  }
  setUser(user: any) {
    this.authService.setUser(user);
    this.router.navigateByUrl("/register");
  }

  // Function to call User data table
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        // this.data = data;

        data.forEach((element) => {
          if(this.currentLoginUser.access === "city_admin") {
            if(this.currentLoginUser.city.city !== element.city.city) {
              return;
            }
          }
          element.cityName = element.city.city;
          element.SubLocation = [];
          for (let i = 0; i < element.location.length; i++) {
            element.SubLocation.push(element.location[i]?.location);
          }
          this.data.push(element);
       });

        console.log("User Get Response", this.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  confirmID(id: any) {
    console.log(id);
    this.deleteId = id;
  }

  // Function to delete the single inventory
  deleteLead() {
    console.log(this.deleteId);

    this.authService.deleteUser(this.deleteId).subscribe((data) => {
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, "Success", {
          timeOut: 5000,
        });
        this.getUserList();
        //   for ( let i = 0; i < this.user.length; i++){
        //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
      }
    });
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // deleteUser(id) {
  //   console.log('Calling deleteInventory', id);

  //   this.authService.deleteUser(id).subscribe((data) => {
  //     console.log(data);
  //     if (data.code === 200) {
  //       this.toastr.success(data.message, 'Success', {
  //         timeOut: 5000,
  //       });
  //       for (let i = 0; i < this.data.length; i++) {
  //         if (this.data[i]._id === id) {
  //           this.data.splice(i, 1);
  //           i--;
  //         }
  //       }
  //     } else {
  //       this.toastr.error(data.message, 'Error', {
  //         timeOut: 5000,
  //       });
  //     }
  //   });
  // }
  // isLogin() {

  //   const token = this.authService.getToken();
  //   return token;
  // }
  // logout() {
  //   localStorage.removeItem('token');
  //   console.log('\nlogout\n');
  //   this.router.navigateByUrl('/');
  // }
  // Function to Get Excel File of the Data Table
  exportTOExcel() {
    let options: JSON2SheetOpts = { header: [] };
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data, options);

    var wscols = [
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
      { wch: 30 },
    ];

    ws["!cols"] = wscols;
    ws["!cols"][0] = { hidden: true };

    ws["!cols"][2] = { hidden: true };
    ws["!cols"][3] = { hidden: true };

    ws["!cols"][6] = { hidden: true };
    ws["!cols"][10] = { hidden: true };

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Data Export");
    XLSX.writeFile(wb, "Users.xlsx");
  }

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
