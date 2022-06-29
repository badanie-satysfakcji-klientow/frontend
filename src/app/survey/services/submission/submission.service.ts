import {Injectable} from '@angular/core';
import {SubmissionResponse} from "../../interfaces/submission-response";
import {API_URL} from "../../../shared/constants/api-url";
import {HttpClient} from "@angular/common/http";
import {SubmissionBody} from "../../interfaces/submission-body";
import {SubmitResponse} from "../../interfaces/submit-response";
import {SubmitType} from "../../types/SubmitType";
import {PatchResponse} from "../../interfaces/patch-response";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private submissionId: string;
  private readonly rootUrl: string;

  constructor(private client: HttpClient) {
    this.submissionId = '';
    this.rootUrl = `${API_URL}/api/questions`;
  }

  private getSubmissionBody(type: SubmitType, response: string | number): SubmissionBody {
    const body: SubmissionBody = {submission: this.submissionId};
    if (type === "string") {
      body.content_character = String(response);
    } else if (type === 'option') {
      body.option = String(response);
    } else if (type === 'number') {
      body.content_numeric = Number(response);
    }
    return body;
  }

  setId(id: string) {
    this.submissionId = id;
  }

  createSubmission(surveyId: string, intervieweeId?: string) {
    const body = intervieweeId ? {interviewee: intervieweeId} : {};
    return this.client.post<SubmissionResponse>(`${API_URL}/api/surveys/${surveyId}/submit`, body);
  }

  submit(questionId: string, type: SubmitType, response: string | number) {
    const body: SubmissionBody = this.getSubmissionBody(type, response);
    return this.client.post<SubmitResponse>(`${this.rootUrl}/${questionId}/answer`, body);
  }

  patch(questionId: string, answerId: string, type: SubmitType, response: string | number) {
    const body: SubmissionBody = this.getSubmissionBody(type, response);
    return this.client.patch<PatchResponse>(`${this.rootUrl}/${questionId}/answer/${answerId}`, body);
  }
}
