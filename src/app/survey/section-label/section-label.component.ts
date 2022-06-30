import {Component, Input, OnInit} from '@angular/core';
import {Section} from "../interfaces/section";

@Component({
  selector: 'app-section-label',
  templateUrl: './section-label.component.html',
  styleUrls: ['./section-label.component.scss']
})
export class SectionLabelComponent implements OnInit {
  @Input() section?: Section;

  constructor() {

  }

  ngOnInit(): void {
  }

}
