import {Component, EventEmitter, Output} from '@angular/core';
import {SurveyStateService} from "../services/survey-state/survey-state.service";
import {Router} from "@angular/router";
import {MODULE_URL} from "../constants/module-url";
import {Item} from "../interfaces/item";
import {Section} from "../interfaces/section";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @Output() navigateItems: EventEmitter<Item[] | undefined>;
  @Output() navigateSection: EventEmitter<Section | undefined>;

  constructor(private surveyState: SurveyStateService,
              private router: Router
  ) {
    this.navigateItems = new EventEmitter();
    this.navigateSection = new EventEmitter()
  }

  private emitContent() {
    const {url} = this.router;
    this.navigateItems.emit(this.surveyState.getItems(url));
    this.navigateSection.emit(this.surveyState.getSection(url))
  }

  onNextClick() {
    const nextSection = this.surveyState.nextSection(this.router.url);
    const surveyId = this.surveyState.getSurveyId();
    this.router.navigateByUrl(`${MODULE_URL}/${surveyId}/${nextSection}`).then(() => this.emitContent());
  }

  onPreviousClick() {
    const previousSection = this.surveyState.previousSection(this.router.url);
    const surveyId = this.surveyState.getSurveyId();
    const targetUrl = `${MODULE_URL}/${surveyId}`.concat(previousSection ? `/${previousSection}` : '');
    this.router.navigateByUrl(targetUrl).then(() => {
      if (previousSection) {
        this.emitContent();
      }
    });
  }
}
