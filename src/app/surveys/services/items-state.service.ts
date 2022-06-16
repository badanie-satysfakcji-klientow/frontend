import {Injectable} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormArray} from "@angular/forms";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemIdentifier} from "../interfaces/survey-item-identifier";

@Injectable({
  providedIn: 'root'
})
export class ItemsStateService {
  private readonly items: FormArray;
  private identifiers: SurveyItemIdentifier[];

  constructor(private formBuilder: FormBuilder
  ) {
    this.items = this.formBuilder.array([]);
    this.identifiers = [];
  }

  addItem(formGroup: SurveyItemFormGroup, identifier: SurveyItemIdentifier) {
    this.items.push(formGroup);
    this.identifiers.push(identifier);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.identifiers.splice(index, 1);
  }

  getItems(): FormArray {
    return this.items;
  }

  getItem(index: number): SurveyItemFormGroup {
    return (this.items.controls as SurveyItemFormGroup[])[index];
  }

  areItemsValid(): boolean {
    return this.items.length > 0 && this.items.valid;
  }

  clearItems() {
    this.items.clear();
  }

  getItemId(index: number) {
    return this.identifiers[index].item_id;
  }
}
