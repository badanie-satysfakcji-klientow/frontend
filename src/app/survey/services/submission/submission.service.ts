import {Injectable} from '@angular/core';
import {SubmitResponse} from "../../interfaces/submit-response";
import {API_URL} from "../../../shared/constants/api-url";
import {HttpClient} from "@angular/common/http";
import {SubmissionBody} from "../../interfaces/submission-body";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private submissionId: string;

  constructor(private client: HttpClient) {
    this.submissionId = '';
  }

  private static getTargetUrl(questionId: string) {
    return `${API_URL}/api/questions/${questionId}/answer`;
  }

  createSubmission(surveyId: string, intervieweeId?: string) {
    const body = intervieweeId ? {interviewee: intervieweeId} : {};
    return this.client.post<SubmitResponse>(`${API_URL}/api/surveys/${surveyId}/submit`, body);
  }

  setId(id: string) {
    this.submissionId = id;
  }

  submitString(questionId: string, response: string, contentOption: boolean) {
    const body: SubmissionBody = {submission: this.submissionId};
    if (contentOption) {
      body.option = response;
    } else {
      body.content_character = response;
    }
    return this.client.post(SubmissionService.getTargetUrl(questionId), body);
  }

  submitNumber(questionId: string, response: number) {
    const body: SubmissionBody = {submission: this.submissionId, content_numeric: response};
    return this.client.post(SubmissionService.getTargetUrl(questionId), body);
  }
}
