import { Component, OnInit } from '@angular/core';
import { LogIn } from 'src/app/models/log-in.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  credentials: LogIn = {
    dni:'',
    password: '',
  };
  loggedIn = false;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  logIn(): void {
    const data = {
      dni: this.credentials.dni,
      password: this.credentials.password,
    };
    console.log(this.credentials.dni);
    console.log(this.credentials.password);
    this.patientService.getByDniAndPassword(data.dni, data.password).subscribe({
      next: (data) => {
        console.log(data);
        this.loggedIn = true;
      },
      error: (e)=> console.error(e),
    });
  }

  newLogIn(): void {
    this.loggedIn = false;
    this.credentials = {
      dni:'',
      password: '',
    };
  }

}
