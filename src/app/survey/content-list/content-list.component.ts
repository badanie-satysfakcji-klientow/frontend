import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";
import {SubmissionService} from "../services/submission/submission.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent extends ContentComponent implements OnChanges {
  control: FormControl
  items!: DropdownItem[];

  constructor(private builder: FormBuilder,
              private submission: SubmissionService
  ) {
    super();
    this.control = this.builder.control('');
  }

  private sendResponse() {
    const questionId = this.item?.questions[0].id;
    if (!questionId) return;

    const {value} = this.control;
    if (this.answerId) {
      this.submission.patch(questionId, this.answerId, this.submitType, value).subscribe(Function.prototype());
    } else {
     this.submission.submit(questionId, this.submitType, value)
       .subscribe(({answer_id})=> this.answerId = answer_id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      if (this.item.required) {
        this.control.setValidators(Validators.required);
      }
      this.items = this.item.options.map(({content, id}) => ({label: content, value: id}));
    }
    this.control.valueChanges.subscribe(() => this.sendResponse());
  }
}
