import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {SectionFormGroup} from "../interfaces/section-form-group";

@Injectable({
  providedIn: 'root'
})
export class SectionsStateService {
  private sections: FormArray

  constructor(private builder: FormBuilder) {
    this.sections = this.builder.array([]);
  }

  addSection(firstItemId: string) {
    //todo: setting last item id
    this.sections.push(this.builder.group({
      name: this.builder.control('', {validators: Validators.required}),
      description: this.builder.control('', {validators: Validators.required}),
      first_item: this.builder.control(firstItemId, {validators: Validators.required}),
      last_item: this.builder.control('', {validators: Validators.required})
    }));
  }

  getSection(firstItemId: string) {
    return this.sections.controls.find((section) => (section as SectionFormGroup).value.start_item === firstItemId);
  }

}
