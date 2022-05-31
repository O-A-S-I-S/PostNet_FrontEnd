import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  patient: Patient = {
    dni: '',
    surname: '',
    lastName: '',
    email: '',
    telephone: '',
    cellphone: '',
    birthDate: '',
    password: '',
    bloodType: '',
  };
  passwordConfirmed: boolean = false;
  signedIn: boolean = false;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  signIn(): void {
    const data = {
      dni: this.patient.dni,
      surname: this.patient.surname,
      lastName: this.patient.lastName,
      email: this.patient.email,
      telephone: this.patient.telephone,
      cellphone: this.patient.cellphone,
      birthDate: this.patient.birthDate,
      password: this.patient.password,
      bloodType: this.patient.bloodType,
    };

    this.patientService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.signedIn = true;
      },
      error: (e)=> console.error(e),
    });
  }
  newSignIn(): void {
    this.signedIn = false;
    this.patient = {
      dni: '',
      surname: '',
      lastName: '',
      email: '',
      telephone: '',
      cellphone: '',
      birthDate: '',
      password: '',
      bloodType: '',
    };
  }
}

