import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./map/map.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgetpassComponent } from "./forgetpass/forgetpass.component";
import { ForgetpassverifyComponent } from "./forgetpassverify/forgetpassverify.component";
import { NewpassComponent } from "./newpass/newpass.component";
import { SignupotpComponent } from "./signupotp/signupotp.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { InventoryComponent } from "./dashboard/inventory/inventory.component";
import { BothComponent } from "./dashboard/both/both.component";
import { UsersComponent } from "./dashboard/users/users.component";
import { LeadsComponent } from "./dashboard/leads/leads.component";
import { InactiveComponent } from "./dashboard/inactive/inactive.component";
import { OptionsComponent } from "./dashboard/options/options.component";
import { AddUsersComponent } from "./dashboard/users/add-users/add-users.component";
import { AddLeadsComponent } from "./dashboard/leads/add-leads/add-leads.component";
import { AddInventoriesComponent } from "./dashboard/inventory/add-inventories/add-inventories.component";
import { RedirectLoginGuard } from "./services/guards/redirectlogin.guard";
import { IsLoginGuard } from "./services/guards/islogin.guard";
import { AssignedLeadsComponent } from "./dashboard/assigned-leads/assigned-leads.component";
import { PageNotFoundComponent } from "./dashboard/page-not-found/page-not-found.component";
import { LocationComponent } from "./dashboard/location/location.component";
import { AddLocationComponent } from "./dashboard/location/add-location/add-location.component";
import { RoleGuard } from "./services/guards/role.guard";
import { FeedbackComponent } from "./dashboard/feedback/feedback.component";
import { DealerslistComponent } from "./dashboard/dealerslist/dealerslist.component";

const routes: Routes = [
  {
    path: "map",
    canActivate: [IsLoginGuard],
    component: MapComponent,
  },
  {
    path: "",
    canActivate: [RedirectLoginGuard],
    component: LoginComponent,
  },
  {
    path: "register",
    canActivate: [RoleGuard],
    data: {
      expectedRole: ["super_admin", "city_admin"],
    },
    component: SignupComponent,
  },
  { path: "forgetpass-component", component: ForgetpassComponent },
  {
    path: "forgetpassverify-component/:email",
    component: ForgetpassverifyComponent,
  },
  { path: "newpass-component/:email", component: NewpassComponent },
  {
    path: "signupotp-component/:email",
    canActivate: [IsLoginGuard],
    component: SignupotpComponent,
  },
  // {
  //   path: "dashboard",
  //   canActivate: [IsLoginGuard],
  //   component: DashboardComponent,
  // },
  {
    path: "navbar",
    canActivate: [IsLoginGuard],
    component: DashboardComponent,
  },
  {
    path: "profile/:email",
    canActivate: [IsLoginGuard],
    component: ProfileComponent,
  },
  {
    path: "profile",
    canActivate: [IsLoginGuard],
    component: ProfileComponent,
  },
  {
    path: "inventory",
    canActivate: [IsLoginGuard],
    component: InventoryComponent,
  },
  {
    path: "agents",
    canActivate: [IsLoginGuard],
    component: UsersComponent,
  },
  {
    path: "feedback",
    canActivate: [IsLoginGuard],
    component: FeedbackComponent,
  },
  {
    path: "location",
    canActivate: [IsLoginGuard],
    component: LocationComponent,
  },
  {
    path: "add-location",
    canActivate: [RoleGuard],
    data: {
      expectedRole: ["super_admin", "city_admin"],
    },
    component: AddLocationComponent,
  },
  {
    path: "assigned-leads",
    canActivate: [IsLoginGuard],
    component: AssignedLeadsComponent,
  },
  {
    path: "both",
    canActivate: [IsLoginGuard],
    component: BothComponent,
  },
  {
    path: "leads",
    canActivate: [IsLoginGuard],
    component: LeadsComponent,
  },
  {
    path: "inactive",
    canActivate: [IsLoginGuard],
    component: InactiveComponent,
  },
  {
    path: "options",
    canActivate: [IsLoginGuard],
    component: OptionsComponent,
  },
  {
    path: "add-users",
    canActivate: [IsLoginGuard],
    component: AddUsersComponent,
  },
  {
    path: "add-leads",
    canActivate: [IsLoginGuard],
    component: AddLeadsComponent,
  },
  {
    path: "add/:formName",
    canActivate: [IsLoginGuard],
    component: AddInventoriesComponent,
  },
  {
    path: "add-inventories",
    canActivate: [IsLoginGuard],
    component: AddInventoriesComponent,
  },
  {
    path: "dealers-list",
    canActivate: [IsLoginGuard],
    component: DealerslistComponent,
  },
  {
    path: "**",
    canActivate: [IsLoginGuard],
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
