import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'search', component: SearchScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
