import { ActivatedRoute } from '@angular/router';
import { Prescription } from './../../model/prescription/prescription.model';
import { PrescriptionService } from './../../services/prescription/prescription.service';
import { Medicine } from './../../model/prescription/medicine.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {


  @Input() viewMode = false;
  @Input() currentPrescription: Prescription = {
    prescriptionDescription: '',
    prescriptionMedicinesResponses: [],
  };
  medicines?: Medicine[];
  prescriptions?: Prescription[];
  subtitulo?: Array<String> = ["Id Receta", "Description", "Medicinas"]
  //currentPrescription?: Prescription = {};
  currentIndex = -1;

  constructor(
    private prescriptionService: PrescriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.retrievePrescription(this.route.snapshot.params['appointmentid']);
  }

  retrievePrescription(id:number):void{
    this.prescriptionService.getAllPrescriptionsByAppointmentId(id).subscribe({
      next:(data)=>{
        this.prescriptions = data;
        console.log(data);
      },
      error: (e)=>console.error(e),
    });
  }

  setActivePrescription(prescription: Prescription, index:number):void{
    this.currentPrescription = prescription;
    this.currentIndex = index;
  }

}
