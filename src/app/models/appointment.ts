import { Patient } from "./patient";
import { Medic } from "./medic";
export class Appointment {
    id:Number;
    cost:Number;
    dueDate:string;
    endTime:string;
    paymentMethod:string;
    startTime:string;

    medics:Medic;
    patient:Patient;
    
}
