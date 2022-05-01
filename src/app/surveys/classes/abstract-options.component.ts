import {EventEmitter, OnDestroy, Output} from "@angular/core";
import {Component} from "@angular/core";
import {AbstractContent} from "./abstract-content.component";
import {FormControl} from "@angular/forms";

@Component({template: ''})
export abstract class AbstractOptions extends AbstractContent implements OnDestroy {
  @Output() optionAddition = new EventEmitter<null>();
  @Output() optionDeletion = new EventEmitter<number>();

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.itemForm.controls.options.clear();
  }

  get options() {
    return this.itemForm.controls.options;
  }

  optionAt(index: number) {
    return this.options.at(index) as FormControl;
  }

  addOption() {
    this.optionAddition.emit(null);
  }

  deleteOption(index: number) {
    this.optionDeletion.emit(index);
  }
}
