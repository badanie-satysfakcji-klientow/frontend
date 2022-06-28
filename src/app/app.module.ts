import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatPaginatorIntlPolishService} from "./shared/services/mat-paginator-intl-polish.service";
import {MAT_RADIO_DEFAULT_OPTIONS} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        MatProgressSpinnerModule
    ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlPolishService},
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: {color: 'primary'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
