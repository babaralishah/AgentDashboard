import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  private readonly url = "https://my-asasa.herokuapp.com";
  user: any;
  form_title: any;
  genericId: any;

  constructor(private httpClient: HttpClient, public router: Router) {}

  // Getting cities names from api
  getCities() {
    return this.httpClient.get<any>(`${this.url}/city`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }

  // Getting Locations names
  getLocations() {
    return this.httpClient.get<any>(`${this.url}/location`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }
  // Add new Location
  addLocations(user: any) {
    return this.httpClient.post<any>(`${this.url}/location/add`, user, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }
  // Add new Sub Location
  addSubLocation(id: any, user: any) {
    return this.httpClient.put<any>(`${this.url}/location/${id}`, user, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }

  // Delete Single Location
  deleteLocation(id) {
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/location/${id}`,
      {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      }
    );
  }

  // Assign lead to the Agent
  editLeadToAgent(id: any, user: any) {
    return this.httpClient.put(this.url + `/assign/${id}`, user, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }
  // Assign lead to the Agent
  assignLeadToAgent(user: any) {
    console.log(user);

    return this.httpClient.post(`${this.url}/assign/add`, user, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }

  // API to delete the assigned leads
  deleteAssignedLeads(id: any) {
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/assign/${id}`,
      {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      }
    );
  }

  // API to get all assigned leads data
  getAllAssignedLeads() {
    return this.httpClient.get<any>(`${this.url}/assign`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }

  //////////// Send data to inventory using inventory form /////////////
  createInventory(user: any) {
    console.log("Create user func");
    return this.httpClient
      .post(`${this.url}/inventory/add`, user, {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      })
      .pipe(catchError(this.handleError));
  }
  // Set inventory form title
  setFormTitle(name) {
    this.form_title = name;
  }
  // Get inventory form title
  getFormTitle() {
    return this.form_title;
  }
  removeFormTitle() {
    this.form_title = null;
  }
  /////////////// Get data from inventory to the inventory table ////////////
  getInventory() {
    return this.httpClient.get<any>(`${this.url}/inventory`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }
  ///////// Getting user table data //////////////
  getUsers() {
    return this.httpClient.get<any>(`${this.url}/users`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }

  getLeads() {
    return this.httpClient.get<any>(`${this.url}/leads`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }

  // API to get all data from Leads, Inventory i.e; both
  getAll() {
    return this.httpClient.get<any>(`${this.url}/inventory/all`, {
      headers: new HttpHeaders().set("Authorization", this.getToken()),
    });
  }
  // API to call delete api for the user data table
  deleteUser(id) {
    console.log("Calling deleteUser", id);
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/users/${id}`,
      {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      }
    );
  }
  ////////////// Send new row table data /////////////
  createUsers(user: any) {
    console.log("Create user func", user);
    if (user instanceof File) {
      const formData = new FormData();
      formData.append("images", user);
      return this.httpClient.post(`${this.url}/users/save`, formData);
    } else {
      return this.httpClient
        .post(`${this.url}/users/save`, user)
        .pipe(catchError(this.handleError));
    }
  }
  // create service to get and set the token to local storage

  setToken(token) {
    localStorage.setItem("token", token);
  }
  getDecodedToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      console.log(Error);
      return null;
    }
  }
  getToken() {
    return localStorage.getItem("token");
  }

  // API to delete the single inventory
  deleteInventory(id) {
    console.log("Calling deleteInventory", id);
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/inventory/${id}`,
      {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      }
    );
  }

  // API to set user from user/inventory table to update
  setUser(user: any) {
    this.user = user;
  }
  // API to get user from user/inventory table to update
  getUser() {
    return this.user;
  }
  removeUser() {
    this.user = null;
  }

  // Api call to Update the already existed user/agent in the user component
  updateUser(id, data) {
    return this.httpClient.put(
      `https://my-asasa.herokuapp.com/users/${id}`,
      data,
      {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      }
    );
  }
  // Update a single Inventory
  updateInventory(id, data) {
    console.log("Calling updateInventory", id);
    return this.httpClient.put(
      `https://my-asasa.herokuapp.com/inventory/${id}`,
      data,
      {
        headers: new HttpHeaders().set("Authorization", this.getToken()),
      }
    );
  }
  ///////// API to Register the new user /////////////
  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/users/register`, user);
  }
  /* API Call to verify otp code */
  ////// Verifying the email address while signing the user up ///////////////////
  verifyOTPEmail(user: any): Observable<any> {
    return this.httpClient
      .post(`${this.url}/users/verifyemail`, user)
      .pipe(catchError(this.handleError));
  }
  ///////// Verifying the user using otp code to his gmail to change his/her password /////////////
  verifyOTPCode(user: any): Observable<any> {
    return this.httpClient
      .post(`${this.url}/users/verifyotpcode`, user)
      .pipe(catchError(this.handleError));
  }
  ///////////// Adding new password after forgetting the old password ////////
  newpassword(user: any): Observable<any> {
    return this.httpClient
      .post(`${this.url}/users/newpassword`, user)
      .pipe(catchError(this.handleError));
  }

  /////////// API to Login the already existed user /////////////
  public login(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/users/login`, user);
  }

  ///////////// Verify User Email ////////////////
  verifyEmail(body: any): Observable<any> {
    return this.httpClient.post(`${this.url}/users/verifyemail`, body);
  }

  /////////////// Get Users Token //////////////////////////
  getAccessToken() {
    return localStorage.getItem("access_token");
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }
  ////////// Logout API ////////////////
  logout() {
    if (localStorage.removeItem("access_token") == null) {
      this.router.navigate(["users/login"]);
    }
  }
  ///////////////////////////////////////////

  ///////// Get Profile API ////////////
  getUserProfile(id): Observable<any> {
    return this.httpClient
      .get(`${this.url}/user/profile/${id}`, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }
  ///////////////////////////////////////////

  ///////// Error Handling /////////////////
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  // ////////////////////////////////////////

  setGenericId(id) {
    this.genericId = id;
  }

  getGenericId() {
    return this.genericId;
  }
  // ////////////////////////////////////////

  priceFilter(value) {
    var val: any = Math.abs(value);
    if (val >= 1000000000) {
      val = Number((val / 1000000000).toFixed(2)) + "Billion";
    } else if (val >= 10000000) {
      val = Number((val / 10000000).toFixed(2)) + " CRORE";
    } else if (val >= 100000) {
      val = Number((val / 100000).toFixed(2)) + " Lac";
    } else if (val >= 1000) val = Number(val.toFixed(2)) + " K";
    return val;
  }
}
