import { AngularEditorModule } from "@kolkov/angular-editor";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ForgetpassComponent } from "./forgetpass/forgetpass.component";
import { ForgetpassverifyComponent } from "./forgetpassverify/forgetpassverify.component";
import { NewpassComponent } from "./newpass/newpass.component";
import { LoginComponent } from "./login/login.component";
import { SignupotpComponent } from "./signupotp/signupotp.component";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
// import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { InventoryComponent } from "./dashboard/inventory/inventory.component";
import { UsersComponent } from "./dashboard/users/users.component";
import { LeadsComponent } from "./dashboard/leads/leads.component";
import { TableFilterPipe } from "./Pipes/table-filter.pipe";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { TableFilter02Pipe } from "./Pipes/table-filter02.pipe";
import { TableFilter03Pipe } from "./Pipes/table-filter03.pipe";
import { TableFilter04Pipe } from "./Pipes/table-filter04.pipe";
import { TableFilter05Pipe } from "./Pipes/table-filter05.pipe";
import { TableFilter06Pipe } from "./Pipes/table-filter06.pipe";
import { InactiveComponent } from "./dashboard/inactive/inactive.component";
import { OptionsComponent } from "./dashboard/options/options.component";
import { AddUsersComponent } from "./dashboard/users/add-users/add-users.component";
import { ToastrModule } from "ngx-toastr";
import { AddLeadsComponent } from "./dashboard/leads/add-leads/add-leads.component";
import { AddInventoriesComponent } from "./dashboard/inventory/add-inventories/add-inventories.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./dashboard/header/header.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavigationComponent } from "./header-navigation/navigation.component";
import { BothComponent } from "./dashboard/both/both.component";
import { AssignedLeadsComponent } from "./dashboard/assigned-leads/assigned-leads.component";
import { PageNotFoundComponent } from "./dashboard/page-not-found/page-not-found.component";
import { FilterPipe } from "./Pipes/filter.pipe";
import { LocationComponent } from "./dashboard/location/location.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddLocationComponent } from "./dashboard/location/add-location/add-location.component";
import { TableDatePipe } from "./Pipes/table-date-filter.pipe";
import { TableDemandPipe } from "./Pipes/table-demand-filter.pipe";
import { RoleGuard } from "./services/guards/role.guard";
import { TableAreaPipe } from "./Pipes/table-area-filter.pipe";
import { FeedbackComponent } from "./dashboard/feedback/feedback.component";
import { DealerslistComponent } from './dashboard/dealerslist/dealerslist.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    ForgetpassComponent,
    ForgetpassverifyComponent,
    NewpassComponent,
    SignupotpComponent,
    DashboardComponent,
    ProfileComponent,
    InventoryComponent,
    UsersComponent,
    LeadsComponent,
    TableAreaPipe,
    TableDemandPipe,
    TableDatePipe,
    TableFilterPipe,
    TableFilter02Pipe,
    TableFilter03Pipe,
    TableFilter04Pipe,
    TableFilter05Pipe,
    TableFilter06Pipe,
    InactiveComponent,
    OptionsComponent,
    AddUsersComponent,
    AddLeadsComponent,
    AddInventoriesComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    NavigationComponent,
    BothComponent,
    AssignedLeadsComponent,
    PageNotFoundComponent,
    FilterPipe,
    LocationComponent,
    AddLocationComponent,
    FeedbackComponent,
    DealerslistComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    NgbModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AngularEditorModule,
    // MaterialModule
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
