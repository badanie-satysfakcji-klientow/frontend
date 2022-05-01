import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";

@Component({template: ''})
export abstract class AbstractContent {
  @Input() itemForm!: SurveyItemFormGroup;
}
