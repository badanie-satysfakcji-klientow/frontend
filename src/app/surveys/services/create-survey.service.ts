import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../../shared/constants/api-url";

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {

  rootURL = `${API_URL}/api/v1/surveys`;

  constructor(private httpClient: HttpClient) {
  }

  submitSurvey(survey: any) {
    console.log(`survey ${survey} sent to API`)
  }
}
