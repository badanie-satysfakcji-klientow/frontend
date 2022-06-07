import {Component} from '@angular/core';
import {SurveysService} from "../services/surveys.service";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-send-surveys',
  templateUrl: './send-surveys.component.html',
  styleUrls: ['./send-surveys.component.scss']
})
export class SendSurveysComponent {
  creatorId: string;
  items: DropdownItem[];
  sendForm: FormGroup;

  constructor(private surveys: SurveysService,
              private formBuilder: FormBuilder
  ) {
    this.creatorId = 'a36c108c-3d99-4b4e-9af0-b210934ab79d';
    this.items = [];
    this.surveys.getSurveys(this.creatorId).subscribe((surveys) => {
      this.items = surveys.map((survey) => ({label: survey.title, value: survey.id}));
    });
    this.sendForm = formBuilder.group({
      surveyId: formBuilder.control('', {validators: [Validators.required]}),
      recipients: formBuilder.array([], {validators: [Validators.required]}),
      recipient: formBuilder.control('', {validators: [Validators.required, Validators.email]})
    })
  }

  onAddClick() {
    (this.sendForm.controls['recipients'] as FormArray)
      .push(this.formBuilder.control(
        this.sendForm.value['recipient'],
        {validators: [Validators.required, Validators.email]})
      );
  }

}
