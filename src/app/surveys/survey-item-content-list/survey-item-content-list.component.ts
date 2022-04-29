import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {OnInit} from "@angular/core";
import {OnDestroy} from "@angular/core";

@Component({
  selector: 'app-survey-item-content-list',
  templateUrl: './survey-item-content-list.component.html',
  styleUrls: ['./survey-item-content-list.component.scss']
})
export class SurveyItemContentListComponent implements OnInit, OnDestroy {
  @Input() itemForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.itemForm.addControl('options', this.formBuilder.array([]));
  }

  ngOnDestroy(): void {
    this.itemForm.removeControl('options')
  }

  get options() {
    return this.itemForm.controls['options'] as FormArray;
  }

  addOption() {
    this.options.push(this.formBuilder.group({value: ['']}))
  }

  deleteOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
  }
}
