import {Injectable} from '@angular/core';
import {SubmissionResponse} from "../../interfaces/submission-response";
import {API_URL} from "../../../shared/constants/api-url";
import {HttpClient} from "@angular/common/http";
import {SubmissionBody} from "../../interfaces/submission-body";
import {SubmitResponse} from "../../interfaces/submit-response";

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
    return this.client.post<SubmissionResponse>(`${API_URL}/api/surveys/${surveyId}/submit`, body);
  }

  setId(id: string) {
    this.submissionId = id;
  }

  submitString(questionId: string, response: string) {
    const body: SubmissionBody = {submission: this.submissionId, content_character: response};
    return this.client.post<SubmitResponse>(SubmissionService.getTargetUrl(questionId), body);
  }

  submitOption(questionId: string, optionId: string) {
    const body: SubmissionBody = {submission: this.submissionId, option: optionId};
    return this.client.post<SubmitResponse>(SubmissionService.getTargetUrl(questionId), body);
  }

  submitNumber(questionId: string, response: number) {
    const body: SubmissionBody = {submission: this.submissionId, content_numeric: response};
    return this.client.post<SubmitResponse>(SubmissionService.getTargetUrl(questionId), body);
  }

  patchString(questionId: string, answerId: string, response: string) {
    const body: SubmissionBody = {submission: this.submissionId, content_character: response};
    return this.client.patch(`${SubmissionService.getTargetUrl(questionId)}/${answerId}`, body);
  }

  patchOption(questionId: string, answerId: string, optionId: string) {
    const body: SubmissionBody = {submission: this.submissionId, option: optionId};
    return this.client.patch(`${SubmissionService.getTargetUrl(questionId)}/${answerId}`, body);
  }

  patchNumber(questionId: string, answerId: string, response: number) {
    const body: SubmissionBody = {submission: this.submissionId, content_numeric: response};
    return this.client.patch(`${SubmissionService.getTargetUrl(questionId)}/${answerId}`, body);
  }
}
