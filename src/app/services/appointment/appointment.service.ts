import { Appointment } from './../../model/appointment/appointment.model';
//import { Appointment } from '../model/appointment/appointment.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl: string = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  //getAll():Observable<Appointment[]>{
  //  return this.http.get<Appointment[]>('${this.baseUrl}/doctor');
  //}

  getAllAppointmentsByDoctorId(id:any):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseUrl}/doctor/${id}`);
  }
}
