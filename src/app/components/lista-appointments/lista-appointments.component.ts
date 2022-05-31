import { Dn } from './../../models/dn';
import { ObjToArrayPipe } from './../../models/objToArray.pipe';
import { AppointmentService } from './../../services/appointment.service';
import { Appointment } from './../../models/appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-appointments',
  templateUrl: './lista-appointments.component.html',
  styleUrls: ['./lista-appointments.component.css']
})
export class ListaAppointmentsComponent implements OnInit {

  appointments:Appointment[];
  title='';
  info:Dn={
    dni:'',
  }
  constructor(private appointmentService:AppointmentService) { }
  ngOnInit(): void {

  }

  retrieveAppointmentByDni():void{
    this.appointmentService.getListPatientsByDni(this.info.dni).subscribe({
      next:(data)=>{
          this.appointments=data;

      },
      error: (e)=>console.log(e)
    })
  }
  clickFunction() {

    alert("clicked me!");

  }
  alertInp(){
    alert(this.info.dni);
  }

    

}
