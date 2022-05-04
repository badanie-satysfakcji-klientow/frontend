import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FAQComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    FAQComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
