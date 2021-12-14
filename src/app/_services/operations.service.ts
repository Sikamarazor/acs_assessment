import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  // Base url to be used 
  baseUrl = 'https://api-uat.acs-sa.com/';

  constructor(private http: HttpClient) { }

  // Get a Merchant by Merchant number
  getMerchantByNumber(merchantNumber: string) {

    let httpHeaders = new HttpHeaders({
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2Nlc3NLZXkiOiIzNzJkMWY5NC02NWRiLTQ1OGItODZiOC0wZjNlYmZmY2MxOGYiLCJuYmYiOjE2MzkwNTA0MTAsImV4cCI6NDc5NDcyNDAxMCwiaWF0IjoxNjM5MDUwNDEwfQ.ipX__X7E5Q9xaxGI_Sb5AeiZgpWRMNnPJUXgFVbeEHY'
    });

    return this.http.get(this.baseUrl + 'Merchant/' + merchantNumber, { headers: httpHeaders}).pipe(
      map( data => {
        return data;
      })
    );
  }

  // Get a list of Terminals by Merchant number
  getTerminalByNumber(merchantNumber: string) {
    let httpHeaders = new HttpHeaders({
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2Nlc3NLZXkiOiIzNzJkMWY5NC02NWRiLTQ1OGItODZiOC0wZjNlYmZmY2MxOGYiLCJuYmYiOjE2MzkwNTA0MTAsImV4cCI6NDc5NDcyNDAxMCwiaWF0IjoxNjM5MDUwNDEwfQ.ipX__X7E5Q9xaxGI_Sb5AeiZgpWRMNnPJUXgFVbeEHY'
    });

    return this.http.get(this.baseUrl + 'Terminal/Terminals/' + merchantNumber, { headers: httpHeaders}).pipe(
      map( data => {
        return data;
      })
    );
  }

}
