import {Component} from "@angular/core";
import {OnDestroy} from "@angular/core";
import {Input} from "@angular/core";
import {SurveyItemGroup} from "../interfaces/survey-item-group";

@Component({template: ''})
export abstract class AbstractContent implements OnDestroy{
  @Input() itemForm!: SurveyItemGroup;

  ngOnDestroy() {
    this.itemForm.controls.questionContent.reset();
  }
}
