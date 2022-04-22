import {Component} from '@angular/core';
import {Input} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-survey-configure',
  templateUrl: './survey-configure.component.html',
  styleUrls: ['./survey-configure.component.scss']
})
export class SurveyConfigureComponent {
  @Input() controlGroup!: FormGroup;

  constructor() {
  }


}
