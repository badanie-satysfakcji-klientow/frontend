import {EventEmitter, Output} from "@angular/core";
import {Component} from "@angular/core";
import {AbstractContent} from "./abstract-content.component";
import {FormControl} from "@angular/forms";

@Component({template: ''})
export abstract class AbstractOptions extends AbstractContent {
  @Output() addOption = new EventEmitter<null>();
  @Output() deleteOption = new EventEmitter<number>();

  get options() {
    return this.itemForm.controls.options;
  }

  optionAt(index: number) {
    return this.options.at(index) as FormControl;
  }

  onAddOption() {
    this.addOption.emit(null);
  }

  onDeleteOption(index: number) {
    this.deleteOption.emit(index);
  }
}
