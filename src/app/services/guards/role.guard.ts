import { ActivatedRouteSnapshot } from "@angular/router";

import { CanActivate, Router } from "@angular/router";

import { AuthenticationService } from "../Authentication/authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.expectedRole;
    const token = this.auth.getToken();
    const tokenPayload = this.auth.getDecodedToken(token);

    if (!token || !expectedRole.includes(tokenPayload?.data?.access)) {
      this.router.navigate(["/"]);
    } else {
      return true;
    }
  }
}
