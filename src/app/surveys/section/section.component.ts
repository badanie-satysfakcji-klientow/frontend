import {Component, Input} from '@angular/core';
import {SectionFormGroup} from "../interfaces/section-form-group";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() form!: SectionFormGroup;

  constructor() {
  }
}
