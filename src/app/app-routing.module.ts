import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOfferingsComponent } from './product-offerings/product-offerings.component';


const routes: Routes = [
  { path: '', redirectTo: '/product-offerings', pathMatch: 'full'},
  { path: 'product-offerings', component: ProductOfferingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
