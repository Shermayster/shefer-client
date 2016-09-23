/**
 * Created by novliza86 on 29.8.2016.
 */
export class PatientBase {
  id:number;
  lastFamily:string;
  activities:ActivityBase[];
  activitiesProgram:ActivitiesProgram;
  parentContact:ParentContact;
}

export class ActivityBase {
  activityName:string;
  activityResponse:string;
  activityFeedback:string;
}

export class ActivitiesProgram {
  activity:string;
  group:string;
  frequency:string;
  ages:string;
}

export class ParentContact {
  parentName:string;
  childName: string;
  startDate: Date;
  tel: string;
  tel2?: string;
  email: string;
  comments?:string;
}
