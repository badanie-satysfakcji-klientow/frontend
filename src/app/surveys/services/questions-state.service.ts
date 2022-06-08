import {Injectable} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormArray} from "@angular/forms";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemType} from "../types/survey-item-type";
import {SurveyItemFormValue} from "../interfaces/survey-item-form-value";
import {SurveyItemIdentifier} from "../interfaces/survey-item-identifier";

@Injectable({
  providedIn: 'root'
})
export class QuestionsStateService {
  private readonly questions: FormArray;
  private identifiers: SurveyItemIdentifier[];

  constructor(private formBuilder: FormBuilder
  ) {
    this.questions = this.formBuilder.array([]);
    this.identifiers = [];
  }

  addQuestion(formGroup: SurveyItemFormGroup) {
    this.questions.push(formGroup);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
    this.identifiers.splice(index, 1);
  }

  popQuestion() {
    this.removeQuestion(this.getQuestionsLength() - 1);
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

  getQuestionsLength() {
    return this.questions.controls.length;
  }

  areQuestionsValid(): boolean {
    return this.questions.length > 0 && this.questions.valid;
  }

  clearQuestions() {
    this.questions.clear();
  }

  registerIdentifier(identifier: SurveyItemIdentifier) {
    this.identifiers.push(identifier);
  }
}
