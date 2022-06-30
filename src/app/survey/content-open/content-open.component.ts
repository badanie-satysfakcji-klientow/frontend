import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {InputType} from "../../shared/types/input-type";
import {ContentComponent} from "../classes/content.component";
import {SubmissionService} from "../services/submission/submission.service";

@Component({
  selector: 'app-content-open',
  templateUrl: './content-open.component.html',
  styleUrls: ['./content-open.component.scss']
})
export class ContentOpenComponent extends ContentComponent implements OnChanges {
  displayAsTextarea: boolean;
  control: FormControl;
  inputType: InputType;
  timeout: any = null;

  constructor(private builder: FormBuilder,
              private submission: SubmissionService
  ) {
    super();
    this.displayAsTextarea = false;
    this.inputType = 'text';
    this.control = this.builder.control('');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.item) {
      this.displayAsTextarea = /Long/.test(this.item.type);
      if (/Numeric/.test(this.item.type)) {
        this.inputType = 'number';
        this.submitType = 'number';
      } else {
        this.submitType = 'string';
      }
      if (this.item.required) {
        this.control.setValidators(Validators.required);
        this.control.updateValueAndValidity();
      }
    }
  }

  submitResponse(event: KeyboardEvent) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (event.keyCode !== 13 && this.surveyId && this.item) {
        this.executeRequest();
      }
    }, 4000);
  }

  executeRequest() {
    const questionId = this.item?.questions[0].id;
    if (!questionId) return;
    if (this.answerId) {
      this.submission.patch(questionId, this.answerId, this.submitType, this.control.value)
        .subscribe(Function.prototype());
    } else{
      this.submission.submit(questionId, this.submitType, this.control.value).subscribe(({answer_id})=> {
        this.answerId = answer_id
      });
    }
  }
}
