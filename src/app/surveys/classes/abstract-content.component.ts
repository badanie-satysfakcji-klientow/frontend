import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {SurveyItemGroup} from "../interfaces/survey-item-group";

@Component({template: ''})
export abstract class AbstractContent {
  @Input() itemForm!: SurveyItemGroup;
}
