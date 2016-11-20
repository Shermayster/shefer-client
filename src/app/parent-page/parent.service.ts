
import {patientActivity, ActivitiesProgram} from "../shared/patien.interface";
import {ActivityInterface} from "../shared/activity.interface";
/**
 * Created by novliza86 on 10/09/2016.
 */
export class ActivitiesResponse {
  done:number;
  partialExecution:number;
  notCarriedOut:number;
  notCooperating:number;
  overallActivities:number;
}

export class ParentService {
//calculate number and type of activities response
  calcActivities(activities:patientActivity[]): ActivitiesResponse{
    let responseActivities:ActivitiesResponse = {done: 0, partialExecution:0, notCarriedOut:0, overallActivities:0, notCooperating:0};
    activities.forEach(activity => {
      responseActivities.overallActivities ++;
      switch (activity.activityResponce) {
        case "Done":
          responseActivities.done ++;
              break;
        case "Partial Execution":
          responseActivities.partialExecution ++;
              break;
        case "Not Carried Out":
          responseActivities.notCarriedOut ++;
              break;
        case "Not Cooperating":
          responseActivities.notCooperating ++;
              break;
      }
    });
    console.log('activities response: ', responseActivities);
    return responseActivities;
  }

  //find active program
  findActiveProgram(programs: ActivitiesProgram[]):ActivitiesProgram {
    return programs.filter(program => program.status === true)[0]
  }

  //add values to activities object from user object
  addValuesToActivities(activities:ActivityInterface[], patientProgram:ActivitiesProgram ):ActivityInterface[] {
     let addedActivities = activities.map(activity => {
      let filteredActivity = patientProgram.patientActivityList.filter(patientActivity => patientActivity.activityId == activity.activityID)[0];
      if(filteredActivity) {
        activity.added = true;
      }
      return activity;
    });
    return addedActivities;
  }
}
