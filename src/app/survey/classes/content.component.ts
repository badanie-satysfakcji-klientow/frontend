import {Component, Input} from "@angular/core";
import {Item} from "../interfaces/item";

@Component({template: ''})
export abstract class ContentComponent {
  @Input() item?: Item;
  @Input() surveyId?: string;
  answerId?: string;
}
