import {Component, EventEmitter, Output} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {Router} from "@angular/router";
import {MODULE_URL} from "../constants/module-url";
import {Item} from "../interfaces/item";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Output() navigate: EventEmitter<Item[]|undefined>;

  constructor(private surveyState: SurveyStateService,
              private router: Router
  ) {
    this.navigate = new EventEmitter<Item[]|undefined>();
  }

  private emitItems() {
    this.navigate.emit(this.surveyState.getItems(this.router.url));
  }

  onNextClick() {
    const nextSection = this.surveyState.nextSection(this.router.url);
    const surveyId = this.surveyState.getSurveyId();
    this.router.navigateByUrl(`${MODULE_URL}/${surveyId}/${nextSection}`).then(() => this.emitItems());
  }

  onPreviousClick() {
    const previousSection = this.surveyState.previousSection(this.router.url);
    const surveyId = this.surveyState.getSurveyId();
    const targetUrl = `${MODULE_URL}/${surveyId}`.concat(previousSection ? `/${previousSection}` : '');
    this.router.navigateByUrl(targetUrl).then(() => {
      if (previousSection) {
        this.emitItems();
      }
    });
  }
}
