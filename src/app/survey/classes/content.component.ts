import {Component, Input} from "@angular/core";
import {Item} from "../interfaces/item";
import {SubmitType} from "../types/SubmitType";

@Component({template: ''})
export abstract class ContentComponent {
  @Input() item?: Item;
  @Input() surveyId?: string;
  answerId?: string;
  submitType: SubmitType;

  protected constructor() {
    this.submitType = 'option';
  }
}
