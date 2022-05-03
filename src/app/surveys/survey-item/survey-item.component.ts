import {Component, SimpleChanges} from '@angular/core';
import {Input} from "@angular/core";
import {SurveyItem} from "../interfaces/survey-item";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {OnChanges} from "@angular/core";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemType, SurveyItemTypeClosed} from "../types/survey-item-type";
import {ItemTypeResolveService} from "../services/item-type-resolve.service";

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnChanges {
  @Input() itemType!: SurveyItemType;
  @Input() style?: string;
  @Output() itemAction = new EventEmitter<SurveyItemFormGroup | null>();
  label = '';

  itemForm = this.formBuilder.group({
    content: new FormControl('', {initialValueIsDefault: true}),
    type: new FormControl(''),
    options: new FormArray([])
  }) as SurveyItemFormGroup;

  constructor(private formBuilder: FormBuilder,
              public itemTypeResolve: ItemTypeResolveService
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itemForm.patchValue({type: this.itemType});
    this.label = this.itemTypeResolve.getLabel(this.itemType);
  }

  onAddClick() {
    this.itemAction.emit(this.itemForm);
  }

  onCancelClick() {
    this.itemAction.emit(null);
  }

  switchClosed(event: SurveyItemType) {
    let oldClosedValue = event as SurveyItemTypeClosed;
    let newClosedValue: SurveyItemTypeClosed = oldClosedValue === 'closedSingle' ? 'closedMultiple' : 'closedSingle';
    this.itemForm.patchValue({type: newClosedValue});
  }

  onOptionAddition() {
    this.itemForm.controls.options.push(this.formBuilder.control(''));
  }

  onOptionDeletion(event: number) {
    this.itemForm.controls.options.removeAt(event);
  }
}
