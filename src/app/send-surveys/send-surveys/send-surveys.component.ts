import {Component} from '@angular/core';
import {SurveysService} from "../services/surveys.service";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";
import {SendFormGroup} from "../interfaces/send-form-group";
import {Router} from "@angular/router";
import {SavedSurveysService} from "../../browse-surveys/services/saved-surveys.service";

@Component({
  selector: 'app-send-surveys',
  templateUrl: './send-surveys.component.html',
  styleUrls: ['./send-surveys.component.scss']
})
export class SendSurveysComponent {
  creatorId: string;
  items: DropdownItem[];
  sendForm: SendFormGroup

  constructor(private surveys: SurveysService,
              private savedSurveys: SavedSurveysService,
              private formBuilder: FormBuilder,
              private router: Router
  ) {
    this.creatorId = 'a96152a1-2b1f-4ab9-8b1b-acd0b4d9c3f1';
    this.items = [];
    this.savedSurveys.getSurveys(this.creatorId).subscribe((surveys) => {
      this.items = surveys.map((survey) => ({label: survey.title, value: survey.id}));
    });
    this.sendForm = formBuilder.group({
      surveyId: formBuilder.control('', {validators: [Validators.required]}),
      recipients: formBuilder.array([], {validators: [Validators.required]}),
      recipient: formBuilder.control('', {
        validators: [Validators.required, Validators.email],
        initialValueIsDefault: true
      })
    }) as SendFormGroup;
  }

  onAddClick() {
    const validators = [Validators.required, Validators.email]
    const value = this.sendForm.value.recipient;
    this.sendForm.controls.recipients.push(this.formBuilder.control(value, {validators: validators}));
    this.sendForm.controls.recipient.reset();
  }

  onDeleteRecipient(index: number) {
    this.sendForm.controls.recipients.removeAt(index);
  }

  onSendClick() {
    this.surveys.sendRecipients(this.sendForm.controls.recipients.value, this.sendForm.value.surveyId)
      .subscribe(() => this.onBackClick());
  }

  onBackClick() {
    this.router.navigate([''])
  }
}
