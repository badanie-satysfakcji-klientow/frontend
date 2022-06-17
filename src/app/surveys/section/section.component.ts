import {Component, Input, SimpleChanges} from '@angular/core';
import {SectionFormGroup} from "../interfaces/section-form-group";
import {SectionsStateService} from "../services/sections-state.service";
import {OnChanges} from "@angular/core";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnChanges {
  @Input() form?: SectionFormGroup;
  @Input() itemId: string;
  @Input() precedingItemId: string;
  displayRemoveButton: boolean;

  constructor(public sectionsState: SectionsStateService
  ) {
    this.displayRemoveButton = false;
    this.itemId = '';
    this.precedingItemId = ''
  }

  ngOnChanges(changes: SimpleChanges) {
    this.displayRemoveButton = this.sectionsState.getSections()[0][0] !== this.form;
  }

  onDeleteClick() {
    this.sectionsState.removeSection(this.itemId, this.precedingItemId);
  }
}
