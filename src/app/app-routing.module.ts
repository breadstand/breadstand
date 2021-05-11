import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOfferingsComponent } from './product-offerings/product-offerings.component';
import { MessageNewComponent } from './message-new/message-new.component';
import { UserMachinesComponent } from './user-machines/user-machines.component';
import { MachinesComponent } from './machines/machines.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  { path: '', redirectTo: '/product-offerings', pathMatch: 'full'},
  { path: 'product-offerings', component: ProductOfferingsComponent },
  { path: 'messages/new', component: MessageNewComponent },
  { 
    path: 'machines', 
    component: MachinesComponent,
    children: [
      { path: 'list', component: UserMachinesComponent },
    ] 
  },
  { path: 'whiterabbit/tasks', component: TasksComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
