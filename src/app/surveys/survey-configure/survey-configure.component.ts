import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {ISurveyFormGroup} from "../survey-create/survey-create.component";

@Component({
  selector: 'app-survey-configure',
  templateUrl: './survey-configure.component.html',
  styleUrls: ['./survey-configure.component.scss']
})
export class SurveyConfigureComponent {
  @Input() controlGroup!: ISurveyFormGroup;

  constructor() {
  }


}
