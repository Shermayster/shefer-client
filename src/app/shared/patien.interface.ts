/**
 * Created by novliza86 on 29.8.2016.
 */
export class PatientBase {
  patientId:number;
  doctorId:number;
  password:number;
  parentContact:ParentContact;
  program:ActivitiesProgram[];
}

export class ParentContact {
  patientId:number;
  parentName:string;
  lastName:string;
  childName: string;
  startDate: Date;
  tel: string;
  tel2?: string;
  email: string;
}

export class ActivitiesProgram {
  programID:number;
  patientId:number;
  status:boolean;
  startDay:string;
  duration:number;
  currentWeek:number;
  patientActivityList:patientActivityList[];
}
export class patientActivityList {
  patientActivityId:number;
  activityResponce:string;
  activityFeedback:string;
  activityStatus:string;
  programId:number
  activityId:number;
}
