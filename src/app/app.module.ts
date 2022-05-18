import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatPaginatorIntlPolishService} from "./shared/services/mat-paginator-intl-polish.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlPolishService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
