import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private readonly url = 'https://my-asasa.herokuapp.com';
  user: any;
  form_title: any;
  genericId: any;

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  // Assign lead to the Agent
  assignLeadToAgent(user:any){
    return this.httpClient
    .post(`${this.url}/assign/add`,user);
  }

  // API to delete the assigned leads
  deleteAssignedLeads(id:any){
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/assign/${id}`
    );

  }

  // API to get all assigned leads data
  getAllAssignedLeads()
  {
    return this.httpClient.get<any>(`${this.url}/assign`);
  }

  //////////// Send data to inventory using inventory form /////////////
  createInventory(user: any) {
    console.log('Create user func');
    return this.httpClient
      .post(`${this.url}/inventory/add`, user)
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
  removeFormTitle(){
    this.form_title = null;
  }
  /////////////// Get data from inventory to the inventory table ////////////
  getInventory() {
    return this.httpClient.get<any>(`${this.url}/inventory`);
  }
  ///////// Getting user table data //////////////
  getUsers() {
    return this.httpClient.get<any>(`${this.url}/users`);
  }

  getLeads() {
    return this.httpClient.get<any>(`${this.url}/leads`);
  }

  // API to get all data from Leads, Inventory i.e; both
  getAll(){
    
    return this.httpClient.get<any>(`${this.url}/inventory/all`);
  }
  // API to call delete api for the user data table
  deleteUser(id) {
    console.log('Calling deleteUser', id);
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/users/${id}`
    );
  }
  ////////////// Send new row table data /////////////
  createUsers(user: any) {
    console.log('Create user func', user);
    if(user instanceof File) {
      const formData = new FormData();
      formData.append('images', user);
      return this.httpClient
      .post(`${this.url}/users/save`, formData);
    } else {
      return this.httpClient
      .post(`${this.url}/users/save`, user)
      .pipe(catchError(this.handleError));
    }
  }
  // create service to get and set the token to local storage

  setToken(token) {
    localStorage.setItem('token', token);
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
    return localStorage.getItem('token');
  }

  // API to delete the single inventory
  deleteInventory(id) {
    console.log('Calling deleteInventory', id);
    return this.httpClient.delete<any>(
      `https://my-asasa.herokuapp.com/inventory/${id}`
    );
  }

  // Getting cities names from api
  getCities() {
    return this.httpClient.get<any>(`https://asasa.com/api/get_cities`);
  }

  // Getting Locations names
  getLocations() {
    return this.httpClient.get<any>(`https://asasa.com/api/get_locations`);
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
      data
    );
  }
  // Update a single Inventory
  updateInventory(id, data) {
    console.log('Calling updateInventory', id);
    return this.httpClient.put(
      `https://my-asasa.herokuapp.com/inventory/${id}`,
      data
    );
  }
  ///////// API to Register the new user /////////////
  register(user: any): Observable<any> {
    return this.httpClient
      .post(`${this.url}/users/register`, user);
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
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  ////////// Logout API ////////////////
  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['users/login']);
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
    let msg = '';
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
}
