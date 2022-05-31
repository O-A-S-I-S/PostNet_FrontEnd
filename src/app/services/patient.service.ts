import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from './../../environments/environment';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`);
  }

  get(dni:string): Observable<Patient> {
      return this.http.get(`${this.baseUrl}/patients/${dni}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(`${this.baseUrl}/patients`, data);
  }

  update(id:number, data: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/patients/${id}`, data);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/patients/{id}`);
  }

  getByBloodType(bloodType: string): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/patients/${bloodType}`);
  }

  findByName(name:string): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseUrl}/patients?name=${name}`);
  }

  getByDniAndPassword(dni: any, password: any): Observable<Patient> {
    return this.http.get(`${this.baseUrl}/patients/log_in?dni=${dni}&password=${password}`);
  }

  // getByDniAndPassword(data:any): Observable<any>{
  //   console.log(data);
  //   return this.http.get(`${this.baseUrl}/patients/log_in`, data);
  // }
}
