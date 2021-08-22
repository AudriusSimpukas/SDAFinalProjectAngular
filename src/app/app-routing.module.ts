import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MaintenanceComponent } from './components/pages/maintenance/maintenance.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ServicemanComponent } from './components/pages/serviceman/serviceman.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'service', component: ServicemanComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }