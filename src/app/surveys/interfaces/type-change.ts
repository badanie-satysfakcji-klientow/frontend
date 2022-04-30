import {EventEmitter} from "@angular/core";

export interface TypeChange {
  changeType: EventEmitter<any>;

  onTypeChange(): void;
}
