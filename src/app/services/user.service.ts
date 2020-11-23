import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// import { User } from '../login/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = environment.url;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  public getAll() {
    return this.http.get<any>(`${this.url}/users`);
}

// register(user: User) {
//     return this.http.post(`${config.apiUrl}/users/register`, user);
// }

// delete(id: number) {
//     return this.http.delete(`${config.apiUrl}/users/${id}`);
// }
}
