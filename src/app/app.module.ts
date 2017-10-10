import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { AppService } from 'app/app.service';
import { Detail2Component } from './detail2/detail2.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    Detail2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [DetailComponent, Detail2Component],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
