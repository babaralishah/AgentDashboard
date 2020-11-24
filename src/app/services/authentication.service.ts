import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
// import { Users } from '../dashboard/users/Users';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // API_URL: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // private readonly url = 'https://shaisecommercestore.herokuapp.com/api'; // environment.url;
  private readonly url = 'https://my-asasa.herokuapp.com';



  // currentUser = {};

  constructor(private httpClient: HttpClient, public router: Router) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  //////////// Send data to inventory using inventory form /////////////
  // tslint:disable-next-line: typedef
  createInventory(user: any) {
    console.log('Create user func');
    return this.httpClient.post(`${this.url}/inventory/add`, user).pipe(
      catchError(this.handleError)
    );
  }

  /////////////// Get data from inventory to the inventory table ////////////
  // tslint:disable-next-line: typedef
  getInventory() {
    return this.httpClient.get<any>(`${this.url}/inventory`);
  }
  ///////// Getting user table data //////////////
  // tslint:disable-next-line: typedef
  getUsers() {
    console.log(`${this.url}/users`);
    return this.httpClient.get<any>(`${this.url}/users`);
  }
  ////////////// Send new row table data /////////////
  // tslint:disable-next-line: typedef
  createUsers(user: any) {
    console.log('Create user func');
    return this.httpClient.post(`${this.url}/users/save`, user).pipe(
      catchError(this.handleError)
    );
  }
  // create service to get and set the token to local storage

  // tslint:disable-next-line: typedef
  setToken(token) {
    localStorage.setItem('token', token);
  }
  getDecodedToken(token: string): any{
    try{
      console.log(token);
      return jwt_decode(token);
    } catch (Error) {
      console.log(Error);
      return null;
    }

  }
  // tslint:disable-next-line: typedef
  getToken() {
    return localStorage.getItem('token');
    // console.log('token:\t', token);
    // return token;
  }

  // Getting cities names from api
  // tslint:disable-next-line: typedef
  getCities(){
    return this.httpClient.get<any>(`https://asasa.com/api/get_cities`);
  }

  // Getting Locations names
  // tslint:disable-next-line: typedef
  getLocations(){
    return this.httpClient.get<any>(`https://asasa.com/api/get_locations`);
  }
  // public getAll(): Observable<any> {
  //   return this.httpClient.get<User[]>(`${this.url}/user`);
  // }

  ///////// Function to Register the new user /////////////
  register(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/users/register`, user).pipe(
      catchError(this.handleError)
    );
  }
  /* API Call to verify otp code */
  ////// Verifying the email address while signing the user up ///////////////////
  verifyOTPEmail(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/users/verifyemail`, user).pipe(
      catchError(this.handleError)
    );
  }
  ///////// Verifying the user using otp code to his gmail to change his/her password /////////////
  verifyOTPCode(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/users/verifyotpcode`, user).pipe(
      catchError(this.handleError)
    );
  }
  ///////////// Adding new password after forgetting the old password ////////
  newpassword(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/users/newpassword`, user).pipe(
      catchError(this.handleError)
    );
  }

  /////////// Function to Login the already existed user /////////////
  public login(user: any): Observable<any> {
    console.log('Hello', user);
    return this.httpClient.post(`${this.url}/users/login`, user);
    // .subscribe((data: any) => {
    //   localStorage.setItem('access_token', data.token)
    //   this.getUserProfile(data._id).subscribe((data) => {
    //     this.currentUser = data;
    //     this.router.navigate(['users/profile/' + data.msg._id]);
    //   })
    // })
  }

  ///////////// Verify User Email ////////////////
  verifyEmail(body: any): Observable<any> {
    return this.httpClient.post(`${this.url}/users/verifyemail`, body);

  }

  /////////////// Get Users Token //////////////////////////
  // tslint:disable-next-line: typedef
  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  ////////// Logout Function ////////////////
  // tslint:disable-next-line: typedef
  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['users/login']);
    }
  }
  ///////////////////////////////////////////

  ///////// Get Profile Function ////////////
  getUserProfile(id): Observable<any> {
    return this.httpClient.get(`${this.url}/user/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  ///////////////////////////////////////////

  ///////// Error Handling /////////////////
  // tslint:disable-next-line: typedef
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
}
