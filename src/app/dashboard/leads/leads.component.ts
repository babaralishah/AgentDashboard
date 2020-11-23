import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
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
  search_id: string;
  search_client: string;
  general_search: string;
  search_location: string;
  search_type: string;
  search_demand: string;
  search_area: string;

  ngOnInit(): void {
    this.getLeadsList();
  }
  
  setUser(user: any){
    this.authService.setUser(user);
    this.authService.setFormTitle('Lead');
    this.router.navigateByUrl('/add-inventories');
    }
    
    setFormTitle(name){
      this.authService.setFormTitle(name);
      this.router.navigate(['/add-inventories']);
    }
    
  getLeadsList() {
    this.authService.getLeads().subscribe(
      (data) => {
        this.user = data.leads;
        console.log('Server response: ', this.user);
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
          this.getLeadsList();
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
