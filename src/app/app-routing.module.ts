import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { StartComponent } from './components/pages/start/start.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }