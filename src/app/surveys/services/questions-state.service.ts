import {Injectable} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormArray} from "@angular/forms";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";

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
    console.log(this.questions.value);
  }

  getQuestions(): FormArray {
    return this.questions;
  }
}
