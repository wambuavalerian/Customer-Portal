import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Adjust path as per your environment setup

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private apiUrl = `${environment.apiUrl}/api/claims`; // Adjust URL as per your backend endpoint

  constructor(private http: HttpClient) { }

  getClaims(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
