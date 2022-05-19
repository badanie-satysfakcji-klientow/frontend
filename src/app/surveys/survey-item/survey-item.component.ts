import {Component, SimpleChanges} from '@angular/core';
import {OnInit} from "@angular/core";
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {Validators} from "@angular/forms";
import {EventEmitter} from "@angular/core";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {OnChanges} from "@angular/core";
import {SurveyItemFormGroup} from "../interfaces/survey-item-form-group";
import {SurveyItemType, SurveyItemTypeClosed} from "../types/survey-item-type";
import {ItemTypeResolveService} from "../services/item-type-resolve.service";
import {QuestionsStateService} from "../services/questions-state.service";

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
  label: string;
  itemForm!: SurveyItemFormGroup;

  constructor(private formBuilder: FormBuilder,
              public itemTypeResolve: ItemTypeResolveService,
              public questionsState: QuestionsStateService
  ) {
    this.label = '';
    this.itemForm = this.formBuilder.group({
      questions: new FormControl('', {initialValueIsDefault: true, validators: Validators.required}),
      type: new FormControl(''),
      options: new FormArray([], [Validators.required, Validators.minLength(2)]),
      required: new FormControl(true, {initialValueIsDefault: true})
    }) as SurveyItemFormGroup;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.itemForm.patchValue({type: this.itemType});
    this.label = this.itemTypeResolve.getLabel(this.itemType);
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

  switchClosed(event: SurveyItemType) {
    let oldClosedValue = event as SurveyItemTypeClosed;
    let newClosedValue: SurveyItemTypeClosed = oldClosedValue === 'closedSingle' ? 'closedMultiple' : 'closedSingle';
    this.itemForm.patchValue({type: newClosedValue});
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
}
