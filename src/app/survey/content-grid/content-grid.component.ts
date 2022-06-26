import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-content-grid',
  templateUrl: './content-grid.component.html',
  styleUrls: ['./content-grid.component.scss']
})
export class ContentGridComponent extends ContentComponent implements OnChanges {
  multipleChoice: boolean;
  radioArray?: FormArray;
  checkboxArray?: boolean[][];

  constructor(private builder: FormBuilder) {
    super();
    this.multipleChoice = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.item) {
      return;
    }
    if (/Multiple/.test(this.item.type)) {
      this.multipleChoice = true;
      this.checkboxArray = [];
      for (let i = 0; i < this.item.questions.length; i++) {
        let row: boolean[] = [];
        for (let j = 0; j < this.item.options.length; j++) {
          row.push(false);
        }
        this.checkboxArray.push(row);
      }
    } else if (/Single/.test(this.item.type)) {
      this.radioArray = this.builder.array(this.item.options.map(() => this.builder.control(null)));
    }
  }
}
