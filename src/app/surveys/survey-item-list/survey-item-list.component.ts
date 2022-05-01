import {Component, OnDestroy} from '@angular/core';
import {AbstractOptions} from "../classes/abstract-options.component";

@Component({
  selector: 'app-survey-item-list',
  templateUrl: './survey-item-list.component.html',
  styleUrls: ['./survey-item-list.component.scss']
})
export class SurveyItemListComponent extends AbstractOptions implements OnDestroy {
  constructor() {
    super()
  }
}
