import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HelpComponent} from "./help/help.component";
import {FAQComponent} from "./faq/faq.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'surveys',
    loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysModule)
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
