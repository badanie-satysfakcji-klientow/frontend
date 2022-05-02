import {EventEmitter} from "@angular/core";

export interface SingleMultiple {
  switchMultiple: EventEmitter<any>;

  onMultipleChange(): void;
}
