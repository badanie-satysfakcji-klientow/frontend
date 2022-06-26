import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ContentComponent} from "../classes/content.component";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {DropdownItem} from "../../shared/interfaces/dropdown-item";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent extends ContentComponent implements OnChanges {
  control: FormControl
  items!: DropdownItem[];

  constructor(private builder: FormBuilder) {
    super();
    this.control = this.builder.control('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      if (this.item.required) {
        this.control.setValidators(Validators.required);
      }
      this.items = this.item.options.map(({content, id}) => ({label: content, value: id}))
      console.log(this.items)
    }
  }

}
