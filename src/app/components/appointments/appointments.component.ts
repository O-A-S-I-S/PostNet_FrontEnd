import { AppointmentService } from '../../services/appointment/appointment.service';
import { Appointment } from '../../model/appointment/appointment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments?: Appointment[];

  constructor(
    private appointment: AppointmentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveAppointments(this.route.snapshot.params['id']);
  }

  retrieveAppointments(id:Number):void{
    this.appointment.getAllAppointmentsByDoctorId(id).subscribe({
      next: (data) => {
        this.appointments = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

}
