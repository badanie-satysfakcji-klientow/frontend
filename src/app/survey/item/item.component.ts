import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Item} from "../interfaces/item";
import {FormBuilder, FormControl} from "@angular/forms";
import {SHORT_ITEM_TYPES} from "../constants/short-item-types";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnChanges {
  @Input() item?: Item;
  control: FormControl;
  typeMatches: Map<string, boolean>;
  displayQuestionContent: boolean;

  constructor(private builder: FormBuilder) {
    this.control = this.builder.control('');
    this.typeMatches = new Map();
    SHORT_ITEM_TYPES.forEach((type) => this.typeMatches.set(type, false));
    this.displayQuestionContent = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.control.setValue(this.item?.questions[0].value);
    SHORT_ITEM_TYPES.forEach((type) => this.typeMatches.set(type, new RegExp(type).test(this.item!.type)));
    this.displayQuestionContent = !/grid/.test(this.item!.type);
  }
}
