import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  dni = '';
  password = '';
  loggedIn = false;

  constructor(private patientService: PatientService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  logIn(): void {
    const data = {
      dni: this.dni,
      password: this.password,
    };
    console.log(this.dni);
    console.log(this.password);
    this.patientService.getByDniAndPassword(data).subscribe({
      next: (data) => {
        console.log(data);
        this.loggedIn = true;
      },
      error: (e)=> console.error(e),
    });
  }

  newLogIn(): void {
    this.loggedIn = false;
    this.dni = '';
    this.password = '';
  }

}
