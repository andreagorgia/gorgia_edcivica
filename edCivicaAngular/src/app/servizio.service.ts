import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http: HttpClient) { }
  goalone(query: string) {
    const url = `https://3000-a0ad535d-bbcb-4460-8a0d-44ad924d875c.ws-eu03.gitpod.io/goalone/goalone/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  goaltwo(query: string) {
    const url = `https://3000-a0ad535d-bbcb-4460-8a0d-44ad924d875c.ws-eu03.gitpod.io/goaltwo/goaltwo/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  goalthree(query: string) {
    const url = `https://3000-a0ad535d-bbcb-4460-8a0d-44ad924d875c.ws-eu03.gitpod.io/goalthree/goalthree/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }





}
