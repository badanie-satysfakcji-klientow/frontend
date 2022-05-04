import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule)},
  {path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {
    path: 'surveys',
    children: [
      {
        path: 'create',
        loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysModule)
      },
      {
        path: 'browse',
        loadChildren: () => import('./browse-surveys/browse-surveys.module').then(m => m.BrowseSurveysModule)
      }
    ]
  },
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
