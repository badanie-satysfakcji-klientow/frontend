import {Injectable} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormArray} from "@angular/forms";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemType} from "../types/survey-item-type";
import {SurveyItemFormValue} from "../interfaces/survey-item-form-value";

@Injectable({
  providedIn: 'root'
})
export class QuestionsStateService {
  private readonly questions: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.questions = this.formBuilder.array([]);
  }

  addQuestion(formGroup: SurveyItemFormGroup) {
    this.questions.push(formGroup);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  getQuestionsArray(): FormArray {
    return this.questions;
  }

  getQuestionTypeAt(index: number): SurveyItemType {
    return (this.questions.value as SurveyItemFormValue[])[index].type;
  }

  getQuestionFormGroupAt(index: number): SurveyItemFormGroup {
    return (this.questions.controls as SurveyItemFormGroup[])[index];
  }
}
