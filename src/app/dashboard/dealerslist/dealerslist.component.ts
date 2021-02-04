import { Component, OnInit, ViewChild } from "@angular/core";

import * as XLSX from "xlsx";

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

  constructor() {}

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
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
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
      for (let i = 0; i < this.contacts?.length - 1; i++) {
        this.contactList[i] = parseInt(this.contacts[i + 1][3]);
        // this.contactList[i] = this.contacts[i + 1][3];
        // console.log("contact no. ", i, ":\t", this.contacts[i][3]);
      }
      console.log(this.contactList);
    };
    reader.readAsBinaryString(target.files[0]);
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
