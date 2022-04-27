import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DropdownItem} from "../interfaces/dropdown-item";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent {
  @Input() placeholder!: string;
  @Input() style?: string;
  @Input() items!: DropdownItem[];

  constructor() {
  }
}
