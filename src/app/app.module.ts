import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';


import { EthereumModule } from './ethereum';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EthereumModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
