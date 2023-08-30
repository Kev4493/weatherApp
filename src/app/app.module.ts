import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SideScreenComponent } from './components/side-screen/side-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { MpsToKmphPipe } from './components/pipes/mps-to-kmh.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SideScreenComponent,
    StartScreenComponent,
    SearchScreenComponent,
    MpsToKmphPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    FormsModule,
    MatProgressBarModule,
    NgClass

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
