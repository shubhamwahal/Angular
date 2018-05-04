import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import { MaterialModule } from '@angular/material'; 
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import * as Rx from 'rxjs';


import { AppComponent } from './app.component';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
      ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppComponent,
    MenuComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
