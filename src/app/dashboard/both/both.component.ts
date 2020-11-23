import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css']
})
export class BothComponent implements OnInit {
  user: any;
  savedId: any;

  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
  deleteId: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastr: ToastrService
    ) { }
  // tslint:disable-next-line: variable-name
  search_id: string;
  // tslint:disable-next-line: variable-name
  search_client: string;
  // tslint:disable-next-line: variable-name
  general_search: string;
  // tslint:disable-next-line: variable-name
  search_location: string;
  // tslint:disable-next-line: variable-name
  search_type: string;
  // tslint:disable-next-line: variable-name
  search_demand: string;
  // tslint:disable-next-line: variable-name
  search_area: string;

  ngOnInit(): void {
    this.getAllList();
  }
  
  setUser(user: any){
    this.authService.setUser(user);
    // this.authService.setFormTitle('Both');
    this.router.navigateByUrl('/add-inventories');
    }
    
    setFormTitle(name){
      this.authService.setFormTitle(name);
      this.router.navigate(['/add-inventories']);
    }
    
  getAllList() {
    this.authService.getAll().subscribe(
      (data) => {
        this.user = data.inventories;
        console.log('Server response: ', data);
      },
      (err) => {
        console.error(err);
      }
    );
  }

    // Function to delete the single inventory
  deleteLead(){
    console.log(this.deleteId);

    this.authService.deleteInventory(this.deleteId).subscribe(data => {
      console.log(data);
      if (data.code === 200) {
        this.toastr.success(data.message, 'Success', {
            timeOut: 5000
          });
          this.getAllList();
      //   for ( let i = 0; i < this.user.length; i++){
      //      if ( this.user[i]._id === this.saveID) { this.user.splice(i, 1); i--; }}
      }

    });
  }

  confirmID(id) {
    console.log(id);

    this.deleteId = id;
  }

}
