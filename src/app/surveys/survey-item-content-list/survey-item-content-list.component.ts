import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {SurveyItemGroup} from "../interfaces/survey-item-group";

@Component({
  selector: 'app-survey-item-content-list',
  templateUrl: './survey-item-content-list.component.html',
  styleUrls: ['./survey-item-content-list.component.scss']
})
export class SurveyItemContentListComponent {
  @Input() itemForm!: SurveyItemGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  get options() {
    return this.itemForm.controls.options;
  }

  optionAt(index: number) {
    return this.options.at(index) as FormControl;
  }

  addOption() {
    this.options.push(this.formBuilder.control(''));
  }

  deleteOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
  }
}
