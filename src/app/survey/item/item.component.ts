import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Item} from "../interfaces/item";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnChanges{
  @Input() item?:Item;
  control: FormControl;

  constructor(private builder : FormBuilder) {
    this.control = this.builder.control('');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.control.setValue(this.item?.questions[0].value);
  }
}
