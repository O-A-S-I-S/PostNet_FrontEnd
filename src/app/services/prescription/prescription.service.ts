import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Prescription } from 'src/app/model/prescription/prescription.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private baseUrl: string = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  getAllPrescriptionsByAppointmentId(apId: any):Observable<Prescription[]>{
    return this.http.get<Prescription[]>(`${this.baseUrl}/patient/1/${apId}`);
  }
}
