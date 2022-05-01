import {Component, SimpleChanges} from '@angular/core';
import {Input} from "@angular/core";
import {SurveyItem} from "../interfaces/survey-item";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {OnChanges} from "@angular/core";
import {SurveyItemGroup} from "../interfaces/survey-item-group";
import {SurveyItemType, SurveyItemTypeClosed, SurveyItemTypeOpen} from "../types/survey-item-type";

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnChanges {
  @Input() itemType!: SurveyItem;
  @Input() style?: string;
  @Output() itemAction = new EventEmitter();

  itemForm = this.formBuilder.group({
    questionContent: new FormControl(''),
    type: new FormControl(''),
    options: new FormArray([])
  }) as SurveyItemGroup;

  ngOnChanges(changes: SimpleChanges) {
    this.itemForm.patchValue({type: this.itemType.value});
  }

  constructor(private formBuilder: FormBuilder) {
  }

  onAddClick() {
    console.log(this.itemForm.value)
    this.itemAction.emit('add');
  }

  onCancelClick() {
    this.itemAction.emit(null);
  }

  changeTypeClosed(event: SurveyItemType) {
    let oldClosedValue = event as SurveyItemTypeClosed;
    let newClosedValue: SurveyItemTypeClosed = oldClosedValue === 'closedSingle' ? 'closedMultiple' : 'closedSingle';
    this.itemForm.patchValue({type: newClosedValue});
  }

  changeTypeOpen(event: SurveyItemType){
    let newOpenValue = event as SurveyItemTypeOpen;
    this.itemForm.patchValue({type: newOpenValue});
  }

  addOption() {
    this.itemForm.controls.options.push(this.formBuilder.control(''));
  }

  deleteOption(event: number) {
    this.itemForm.controls.options.removeAt(event);
  }
}
