import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-delete-requests",
  templateUrl: "./delete-requests.component.html",
  styleUrls: ["./delete-requests.component.css"],
})
export class DeleteRequestsComponent implements OnInit {
  @ViewChild("content") content: any;

  constructor() {}

  ngOnInit(): void {}

  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
