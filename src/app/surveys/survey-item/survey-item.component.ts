import {Component, SimpleChanges} from '@angular/core';
import {OnInit} from "@angular/core";
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {Validators} from "@angular/forms";
import {EventEmitter} from "@angular/core";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {OnChanges} from "@angular/core";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemType} from "../types/survey-item-type";
import {ItemTypeResolveService} from "../services/item-type-resolve.service";
import {QuestionsStateService} from "../services/questions-state.service";
import {SurveyItemLabel} from "../types/survey-item-label";

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
              public questionsState: QuestionsStateService
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
      this.itemForm = this.questionsState.getQuestionFormGroupAt(this.index);
    }
  }

  onAddClick() {
    this.questionsState.addQuestion(this.itemForm);
    this.onCancelClick();
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
