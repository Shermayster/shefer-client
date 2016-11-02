/**
 * Created by novliza86 on 29.8.2016.
 */
export class PatientBase {
  patientID:number;
  doctorId:number;
  password:number;
  contact:ParentContact;
  program:ActivitiesProgram[];
  constructor(details: {
    patientID?: number,
    doctorId?: number,
    password?:number,
    contact?:ParentContact,
    program?:ActivitiesProgram[],
  } = {}) {
    this.patientID = details.patientID || null;
    this.doctorId = details.doctorId || null;
    this.password = details.password || null;
    this.contact = details.contact || new ParentContact();
    this.program = details.program || [];
  }
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
  constructor(address: {
    patientId?:number,
    parentName?:string,
    lastName?:string,
    childName?: string,
    startDate?: Date,
    tel?: string,
    tel2?: string,
    email?: string
  } = {}) {
    this.patientId = address.patientId || null;
    this.parentName = address.parentName || '';
    this.lastName = address.lastName || '';
    this.childName = address.childName || '';
    this.tel = address.tel || '';
    this.tel2 = address.tel2 || '';
    this.email = address.email || '';
  }
}

export class ActivitiesProgram {
  programID:number;
  patientId:number;
  status:boolean;
  startDay:string;
  duration:number;
  currentWeek:number;
  patientActivityList:patientActivityList[];
  constructor(program: {
    programID?:number,
    patientId?:number,
    status?:boolean,
    startDay?:string,
    duration?:number,
    currentWeek?:number
  } = {}) {
    this.programID = program.programID || null;
    this.patientId = program.patientId || null;
    this.status = program.status || null;
    this.startDay = program.startDay || null;
    this.duration = program.duration || null;
    this.currentWeek = program.currentWeek || null;
  }
}
export class patientActivityList {
  patientActivityId:number;
  activityResponce:string;
  activityFeedback:string;
  activityStatus:string;
  programId:number
  activityId:number;
  frequency:number;
  activityName:string;
  activityType:string;

}
