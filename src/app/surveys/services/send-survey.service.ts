import { Injectable } from '@angular/core';
import {API_URL} from "../../shared/constants/api-url";

@Injectable({
  providedIn: 'root'
})
export class SendSurveyService {

  rootURL = `${API_URL}/api/v1/surveys`;

  constructor() { }
}
