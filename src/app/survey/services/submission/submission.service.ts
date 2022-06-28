import {Injectable} from '@angular/core';
import {SubmitResponse} from "../../interfaces/submit-response";
import {API_URL} from "../../../shared/constants/api-url";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private rootUrl = `${API_URL}/api/surveys`;
  private submissionId?: string;

  constructor(private client: HttpClient) {
  }

  createSubmission(surveyId: string, intervieweeId?: string) {
    const body = intervieweeId ? {interviewee: intervieweeId} : {};
    return this.client.post<SubmitResponse>(`${this.rootUrl}/${surveyId}/submit`, body);
  }

  setId(id: string) {
    this.submissionId = id;
  }
}
