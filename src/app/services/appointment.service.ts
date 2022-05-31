import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './../models/appointment';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
  private baseURL :string=environment.baseUrl+'/citas';
  constructor(private httpClient:HttpClient){}
  
  getListPatientsByDni(dni:string):Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL+'/patients/'+dni}`);

  }

  create(data:any):Observable<any>{
    return this.httpClient.post(this.baseURL,data)
  }

}
