import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {SurveyConfigurationFormGroup} from "../interfaces/survey-configuration-form-group";

@Component({
  selector: 'app-survey-configure',
  templateUrl: './survey-configure.component.html',
  styleUrls: ['./survey-configure.component.scss']
})
export class SurveyConfigureComponent {
  @Input() controlGroup!: SurveyConfigurationFormGroup;

  constructor() {
  }
}
