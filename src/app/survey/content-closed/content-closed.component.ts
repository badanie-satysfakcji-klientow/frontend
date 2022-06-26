import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-content-closed',
  templateUrl: './content-closed.component.html',
  styleUrls: ['./content-closed.component.scss']
})
export class ContentClosedComponent extends ContentComponent implements OnChanges {
  multipleChoice: boolean;
  control?: FormControl;
  array?: FormArray;

  constructor(private builder: FormBuilder) {
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
      this.item.options.forEach(()=>this.array?.push(this.builder.control(false)))
    } else if (this.item && /Single/.test(this.item.type)) {
      this.control = this.builder.control(null);
    }
  }
}
