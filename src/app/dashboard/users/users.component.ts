import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  general_search: string;
  data: any;
  deleteId: any;

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  user: any;
  ngOnInit(): void {
    this.getUserList();
  }
  setUser(user: any) {
    this.authService.setUser(user);
    this.router.navigateByUrl('/register');
  }
  
  // Function to call User data table
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.data = data;
        console.log('User Get Response', this.data);
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
    deleteLead(){
      console.log(this.deleteId);
  
      this.authService.deleteUser(this.deleteId).subscribe(data => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success(data.message, 'Success', {
              timeOut: 5000
            });
            this.getUserList();
        //   for ( let i = 0; i < this.user.length; i++){
        //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
        }
  
      });
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
  // tslint:disable-next-line: typedef
  // logout() {
  //   localStorage.removeItem('token');
  //   console.log('\nlogout\n');
  //   this.router.navigateByUrl('/');
  // }
}
