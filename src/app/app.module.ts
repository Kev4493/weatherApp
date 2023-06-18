import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SideScreenComponent } from './components/side-screen/side-screen.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SearchScreenComponent,
    SideScreenComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DatePipe,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
