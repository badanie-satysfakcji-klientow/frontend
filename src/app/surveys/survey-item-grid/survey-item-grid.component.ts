import {Component} from '@angular/core';
import {AbstractOptions} from "../classes/abstract-options.component";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-survey-item-grid',
  templateUrl: './survey-item-grid.component.html',
  styleUrls: ['./survey-item-grid.component.scss']
})
export class SurveyItemGridComponent extends AbstractOptions {
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  addQuestion() {
    this.itemForm.controls.questions.push(this.formBuilder.control(
      '',
      {initialValueIsDefault: true, validators: Validators.required})
    )
  }

  deleteQuestion(index: number) {
    this.itemForm.controls.questions.removeAt(index);
  }
}
