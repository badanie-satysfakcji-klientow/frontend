import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {SubmissionService} from "../services/submission/submission.service";

@Component({
  selector: 'app-content-grid',
  templateUrl: './content-grid.component.html',
  styleUrls: ['./content-grid.component.scss']
})
export class ContentGridComponent extends ContentComponent implements OnChanges {
  multipleChoice: boolean;
  radioArray?: FormArray;
  radioAnswerIds?: string[];
  checkboxAnswerIds?: string[][];

  constructor(private builder: FormBuilder,
              private submission: SubmissionService
  ) {
    super();
    this.multipleChoice = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.item) {
      return;
    }
    if (/Multiple/.test(this.item.type)) {
      this.multipleChoice = true;
      this.checkboxAnswerIds = [];
      for (let i = 0; i < this.item.questions.length; i++) {
        let answerRow: string[] = [];
        for (let j = 0; j < this.item.options.length; j++) {
          answerRow.push('');
        }
        this.checkboxAnswerIds.push(answerRow);
      }
    } else if (/Single/.test(this.item.type)) {
      this.radioArray = this.builder.array(this.item.options.map(() => this.builder.control(null)));
      this.radioAnswerIds = [];
      for (let i = 0; i < this.item.options.length; i++) {
        this.radioAnswerIds.push('');
      }
    }
  }

  sendResponse(index: number) {
    const questionId = this.item?.questions[index].id;
    if (!(this.radioAnswerIds && questionId)) return;

    const {value} = this.radioArray?.at(index) as FormControl;
    if (this.radioAnswerIds[index]) {
      this.submission.patch(questionId, this.radioAnswerIds[index], this.submitType, value)
        .subscribe(Function.prototype());
    } else {
      this.submission.submit(questionId, this.submitType, value)
        .subscribe(({answer_id}) => {
          if (this.radioAnswerIds) this.radioAnswerIds[index] = answer_id;
        });
    }
  }

  sendMultipleResponse(questionIndex: number, optionIndex: number, value: string) {
    const questionId = this.item?.questions[questionIndex].id;
    if (!(questionId && this.checkboxAnswerIds)) return;

    console.log(this.checkboxAnswerIds[questionIndex][optionIndex]);

    if (this.checkboxAnswerIds[questionIndex][optionIndex]) {
      this.submission.deleteSubmit(questionId, this.checkboxAnswerIds[questionIndex][optionIndex]).subscribe(() => {
        if (this.checkboxAnswerIds) this.checkboxAnswerIds[questionIndex][optionIndex] = '';
      });
    } else {
      this.submission.submit(questionId, this.submitType, value).subscribe(({answer_id})=>{
        if (this.checkboxAnswerIds) this.checkboxAnswerIds[questionIndex][optionIndex] = answer_id;
      })
    }
  }
}
