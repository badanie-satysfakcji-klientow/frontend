import {Component, EventEmitter, Input, ViewEncapsulation} from '@angular/core';
import {DropdownItem} from "../interfaces/dropdown-item";
import {FormControl} from "@angular/forms";
import {Output} from "@angular/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent {
  @Input() placeholder!: string;
  @Input() resetOption = false;
  @Input() style?: string;
  @Input() items!: DropdownItem[];
  @Output() itemSelect = new EventEmitter();

  selection = new FormControl('');

  constructor() {
  }

  onSelectionChange() {
    this.itemSelect.emit(this.selection.value);
  }
}
