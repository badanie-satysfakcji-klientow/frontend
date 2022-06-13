import {Component, SimpleChanges} from '@angular/core';
import {OnInit} from "@angular/core";
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {Validators} from "@angular/forms";
import {EventEmitter} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {OnChanges} from "@angular/core";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemType} from "../types/survey-item-type";
import {ItemTypeResolveService} from "../services/item-type-resolve.service";
import {ItemsStateService} from "../services/items-state.service";
import {SurveyItemLabel} from "../types/survey-item-label";
import {SurveysService} from "../services/surveys.service";
import {SurveyIdStateService} from "../services/survey-id-state.service";

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnChanges, OnInit {
  @Input() itemType!: SurveyItemType;
  @Input() index?: number;
  @Input() style?: string;
  @Output() complete = new EventEmitter<null>();
  label?: SurveyItemLabel;
  itemForm!: SurveyItemFormGroup;

  constructor(private formBuilder: FormBuilder,
              private itemTypeResolve: ItemTypeResolveService,
              public itemsStateService: ItemsStateService,
              private surveys: SurveysService,
              private surveyIdState: SurveyIdStateService
  ) {
    this.itemForm = this.formBuilder.group({
      questions: this.formBuilder.array([
        this.formBuilder.control(
          '',
          {initialValueIsDefault: true, validators: Validators.required})
      ]),
      type: this.formBuilder.control(''),
      options: this.formBuilder.array(
        [],
        [Validators.required, Validators.minLength(2)]
      ),
      required: this.formBuilder.control(true, {initialValueIsDefault: true})
    }) as SurveyItemFormGroup;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itemForm.patchValue({type: this.itemType});
    this.label = this.itemTypeResolve.resolveType(this.itemType);
  }

  ngOnInit() {
    if (this.index !== undefined) {
      this.itemForm = this.itemsStateService.getItemAt(this.index);
    }
  }

  onAddClick() {
    this.itemsStateService.addItem(this.itemForm);
    this.surveys.createItem(this.itemForm.value, this.surveyIdState.getSurveyId())
      .subscribe({
        next: ({questions_ids, item_id}) => {
          this.itemsStateService.registerIdentifier({questions_ids, item_id});
        },
        error: () => {
          this.itemsStateService.popItem();
        }
      });
    this.onCancelClick();
  }

  onDeleteClick(index: number) {
    this.itemsStateService.removeItem(index);
  }

  onCancelClick() {
    this.complete.emit(null);
  }

  onOptionAdd() {
    this.itemForm.controls.options.push(this.formBuilder.control('', Validators.required));
  }

  onOptionDelete(event: number) {
    this.itemForm.controls.options.removeAt(event);
  }

  onRequiredChange() {
    this.itemForm.patchValue({required: !this.itemForm.value.required});
  }

  showMultipleSwitch(): boolean {
    return /Single|Multiple/.test(this.itemForm.value.type);
  }

  isItemTypeMultiple(): boolean {
    return /Multiple/.test(this.itemForm.value.type);
  }

  onMultipleChange() {
    if (/grid/.test(this.itemForm.value.type)) {
      this.itemForm.patchValue({type: this.isItemTypeMultiple() ? 'gridSingle' : 'gridMultiple'});
    } else {
      this.itemForm.patchValue({type: this.isItemTypeMultiple() ? 'closedSingle' : 'closedMultiple'});
    }
  }
}
