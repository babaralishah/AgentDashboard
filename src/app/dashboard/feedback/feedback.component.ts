import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  addNewContactNumber = (item) => ({ contact: item });
  @ViewChild("content") content: any;
  user: any;
  sendMessageForm: FormGroup;
  messageType: any = "agent";
  agentList: any = [];
  userContact: any[] = [];
  contactNumber: any = [];
  agentsName: any;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initialize();
    this.getAllUsersList();
  }

  getAllUsersList() {
    this.authService.getUsers().subscribe(
      (users) => {
        this.agentList = [];
        const data = users;
        console.log(users);
        this.agentList = users;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  changeAssignedAgent(agent: any) {
    let number = [];
    for (let i = 0; i < agent.length; i++) {
      number[i] = agent[i]?.contact;
      console.log(number[i]);

      number[i] = parseInt(number[i]);
      console.log(number[i]);
    }
    console.log(number);

    this.sendMessageForm.patchValue({ phone: number });
  }
  initialize() {
    this.sendMessageForm = this.formBuilder.group({
      phone: [],
      message: [""],
    });
  }
  changeContactNumber(number: any) {
    console.log(this.contactNumber);
  }

  setChangeType(type: any) {
    this.messageType = type;
    this.sendMessageForm.reset();
  }
  newContact(number: any) {
    let num = number.target.value;
    let arr: any[] = [];
    arr[0] = num;
    this.userContact = arr;
    this.userContact[0] = parseInt(this.userContact[0]);
    console.log(this.userContact);

    this.sendMessageForm.patchValue({ phone: this.userContact });
  }
  sendMessage() {
    console.log(this.sendMessageForm.value);
    const phone = this.sendMessageForm.get("phone").value;
    const message = this.sendMessageForm.get("message").value;
    if (phone === null) {
      this.toastr.error("Phone Number is Missing", "Error", {
        timeOut: 3000,
      });
    } else if (message === "") {
      this.toastr.error("Message Field is Empty", "Error", {
        timeOut: 3000,
      });
    } else {
      this.authService.sendMessage(this.sendMessageForm.value).subscribe(
        (data) => {
          console.log(data);

          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          this.sendMessageForm.reset();
          this.agentsName = null;
        },
        (error) => {
          this.toastr.error(error, "Error", {
            timeOut: 3000,
          });
        }
      );
    }
  }
  sendNonAgentMessage() {
    console.log(this.sendMessageForm.value);
    if (this.contactNumber?.length > 0) {
      console.log(this.contactNumber);

      for (let i = 0; i < this.contactNumber?.length; i++) {
        this.contactNumber[i] = parseInt(this.contactNumber[i]);
      }
      this.sendMessageForm.patchValue({ phone: this.contactNumber });
    }
    const phone = this.sendMessageForm.get("phone").value;
    const message = this.sendMessageForm.get("message").value;
    if (phone === null) {
      this.toastr.error("Phone Number is Missing", "Error", {
        timeOut: 3000,
      });
    } else if (message === null) {
      this.toastr.error("Message Field is Empty", "Error", {
        timeOut: 3000,
      });
    } else {
      console.log(this.sendMessageForm.value);
      this.authService.sendMessage(this.sendMessageForm.value).subscribe(
        (data) => {
          console.log(data);

          this.toastr.success(data.message, "Success", {
            timeOut: 5000,
          });
          this.sendMessageForm.reset();
          this.contactNumber = null;
        },
        (error) => {
          this.toastr.error(error, "Error", {
            timeOut: 3000,
          });
        }
      );
    }
  }
  contentWidthEmitted(value) {
    this.content.nativeElement.style.marginLeft = `${value}px`;
  }
}
