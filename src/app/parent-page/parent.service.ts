import {ActivityBase} from "../shared/patien.interface";
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
  calcActivities(activities:ActivityBase[]): ActivitiesResponse{
    let responseActivities:ActivitiesResponse = {done: 0, partialExecution:0, notCarriedOut:0, overallActivities:0, notCooperating:0};
    activities.forEach(activity => {
      responseActivities.overallActivities ++;
      switch (activity.activityResponse) {
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
}
