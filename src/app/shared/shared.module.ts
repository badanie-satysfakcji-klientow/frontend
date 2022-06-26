import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { BooleanStringPipe } from './pipes/boolean-string.pipe';
import {MatTooltipModule} from "@angular/material/tooltip";
import { TimesDirective } from './directives/times/times.directive';


@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        DropdownComponent,
        BooleanStringPipe,
        InputComponent,
        TimesDirective
    ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DropdownComponent,
    BooleanStringPipe,
    InputComponent,
    TimesDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
