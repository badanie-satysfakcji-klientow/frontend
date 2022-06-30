import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {SubmissionService} from "../services/submission/submission.service";

@Component({
  selector: 'app-content-closed',
  templateUrl: './content-closed.component.html',
  styleUrls: ['./content-closed.component.scss']
})
export class ContentClosedComponent extends ContentComponent implements OnChanges {
  multipleChoice: boolean;
  control?: FormControl;
  array?: FormArray;
  answerIds?: string[];

  constructor(private builder: FormBuilder,
              private submission: SubmissionService
  ) {
    super();
    this.multipleChoice = false;
  }

  getCheckboxControls() {
    return this.array?.controls as FormControl[] || [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item && /Multiple/.test(this.item.type)) {
      this.multipleChoice = true;
      this.array = this.builder.array([]);
      this.answerIds = [];
      this.item.options.forEach(() => {
        this.array?.push(this.builder.control(false));
        this.answerIds?.push('');
      });
    } else if (this.item && /Single/.test(this.item.type)) {
      this.control = this.builder.control(null);
    }
  }

  sendResponse() {
    const questionId = this.item?.questions[0].id;
    if (!(questionId && this.control)) return;

    const {value} = this.control;
    if (this.answerId) {
      this.submission.patch(questionId, this.answerId, this.submitType, value).subscribe(Function.prototype());
    } else {
      this.submission.submit(questionId, this.submitType, value)
        .subscribe(({answer_id}) => this.answerId = answer_id);
    }
  }

  sendMultipleResponse(value: string, index: number) {
    const questionId = this.item?.questions[0].id;
    if (!(questionId && this.answerIds)) return;

    if (this.answerIds[index]) {
      this.submission.deleteSubmit(questionId, this.answerIds[index])
        .subscribe(() => {
          if (this.answerIds) this.answerIds[index] = '';
        });
    } else {
      this.submission.submit(questionId, this.submitType, value)
        .subscribe(({answer_id}) => {
          if (this.answerIds) this.answerIds[index] = answer_id;
        });
    }


  }
}
