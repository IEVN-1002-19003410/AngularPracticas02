import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempComponentComponent } from './temp-component/temp-component.component';
import { FormsModule } from '@angular/forms';
import { OperaMultiComponent } from './operaMulti/opera-multi/opera-multi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { CineComponent } from './cine/cine.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponentComponent,
    OperaMultiComponent,
    CineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
