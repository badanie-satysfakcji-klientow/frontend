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
import {SectionsStateService} from "../services/sections-state.service";

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
  loading: boolean;
  itemForm!: SurveyItemFormGroup;

  constructor(private formBuilder: FormBuilder,
              private itemTypeResolve: ItemTypeResolveService,
              public itemsState: ItemsStateService,
              private surveys: SurveysService,
              private surveyIdState: SurveyIdStateService,
              public sectionsState: SectionsStateService
  ) {
    this.loading = false;
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
      this.itemForm = this.itemsState.getItem(this.index);
    }
  }

  onAddClick() {
    this.loading = true;
    this.surveys.createItem(this.itemForm.value, this.surveyIdState.getSurveyId())
      .subscribe(({questions_ids, item_id}) => {
        this.itemsState.addItem(this.itemForm, {questions_ids, item_id});
        this.sectionsState.registerItem(item_id);
        this.loading = false;
        this.onCancelClick();
      });
  }

  onDeleteClick(index: number) {
    this.loading = true;
    this.surveys.deleteItem(this.itemsState.getItemId(index))
      .subscribe(() => {
        this.itemsState.removeItem(index);
        this.loading = false;
      });
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

  onSectionAdd(index: number) {
    this.sectionsState.addSection(this.itemsState.getItemId(index));
  }
}
