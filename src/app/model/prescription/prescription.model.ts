import { Medicine } from './medicine.model';
export class Prescription {
    prescriptionId?:number;
    prescriptionDescription?:string;
    prescriptionMedicinesResponses?:Array<any>;
}
