import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Accordion } from './components/accordion/accordion/accordion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Accordion],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
