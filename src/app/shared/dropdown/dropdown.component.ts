import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DropdownItem} from "../interfaces/dropdown-item";
import {FormControl} from "@angular/forms";

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
  @Input() control!: FormControl;
  @Input() labeledValue = true;
}
