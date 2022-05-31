import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  //patients!: Patient[];
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  getPatients():void{
    this.patientService.getAll().subscribe({
      next: (data)=>{
        this.patients = data;
      },
      error: (e)=>console.log(e),
    })
  }

}
