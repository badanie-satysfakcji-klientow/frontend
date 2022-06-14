import { Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SectionFormGroup} from "../interfaces/section-form-group";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent{
  form: SectionFormGroup;

  constructor(private builder:FormBuilder) {
    this.form = this.builder.group({
      name: this.builder.control('', {validators: Validators.required}),
      description: this.builder.control('', {validators: Validators.required})
    }) as SectionFormGroup;
  }



}
