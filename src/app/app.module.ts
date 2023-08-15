import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SideScreenComponent } from './components/side-screen/side-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { StartScreenComponent } from './components/start-screen/start-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SideScreenComponent,
    StartScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
