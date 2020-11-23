// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpEvent, HttpErrorResponse, HttpEventType  } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Map } from './map';
@Injectable({
  providedIn: 'root'
})
export class MapserviceService {
  constructor(private http: HttpClient) { 
}

private  apiurl = "https://asasa.com/api/property";
readData(): Observable<any> {
  return this.http.get(this.apiurl);
}

}