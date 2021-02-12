import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { ToastrService } from "ngx-toastr";

import * as XLSX from "xlsx";
import { Router } from "@angular/router";

type AOA = any[][];
@Component({
  selector: "app-dealerslist",
  templateUrl: "./dealerslist.component.html",
  styleUrls: ["./dealerslist.component.css"],
})
export class DealerslistComponent implements OnInit {
  @ViewChild("content") content: any;
  file: any;
  arrayBuffer: string | ArrayBuffer;
  filelist: any[];
  isCsv: boolean;
  isNewContact: boolean = true;
  contactList: any = [];
  message: any;
  event: any;
  isShowFile: boolean = false;

  constructor(
    public authService: AuthenticationService,
    private toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit(): void {}
  getCsvFile() {
    this.isCsv = true;
    this.isNewContact = false;
  }
  createNewContact() {
    this.isNewContact = true;
    this.isCsv = false;
  }
  contacts: AOA = [[], []];
  wopts: XLSX.WritingOptions = { bookType: "xlsx", type: "array" };
  fileName: string = "SheetJS.xlsx";

  onFileChange(evt: any) {
    /* wire up file reader */
    this.event = evt;
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target?.files?.length !== 1) {
      this.toastr.error("Cannot use multiple files", "Error", {
        timeOut: 3000,
      });
      throw new Error("Cannot use multiple files");
    } else {
      this.toastr.success("File uploaded successfully!!", "Success", {
        timeOut: 5000,
      });
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.contacts = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.contacts);
      console.log("Headers", this.contacts[0]);
    };
    reader.readAsBinaryString(target.files[0]);
  }
  showDataFile() {
    this.isShowFile = !this.isShowFile;
  }
  sendMessage() {
    for (let i = 0; i < this.contacts?.length - 1; i++) {
      this.contactList[i] = parseInt(this.contacts[i + 1][1]);
    }
    console.log(this.contactList);
    console.log(this.message);

    const sendMessageForm = [
      {
        phone: ([] = this.contactList),
        message: this.message,
      },
    ];
    console.log(sendMessageForm[0]);

    if (this.message != null) {
      this.authService.sendMessage(sendMessageForm[0]).subscribe(
        (data) => {
          console.log(data);
          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          this.message = null;
          // window.location.reload();
          // this.router.navigateByUrl("/inventory");
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.message == null) {
      this.toastr.error("Message Field is Empty", "Error", {
        timeOut: 3000,
      });
    }
  }
  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.contacts);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Dealers-List");

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
