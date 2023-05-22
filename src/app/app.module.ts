import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SearchScreenComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
