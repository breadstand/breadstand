import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductOfferingsComponent } from './product-offerings/product-offerings.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { MessageNewComponent } from './message-new/message-new.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserMachinesComponent } from './user-machines/user-machines.component';
import { MachinesComponent } from './machines/machines.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [										
    AppComponent,
    ProductOfferingsComponent,
      MenuComponent,
      ServiceBlockComponent,
      MessageNewComponent,
      AddressFormComponent,
      UserMachinesComponent,
      MachinesComponent,
      HeroSectionComponent,
      CustomerSidebarComponent,
      TasksComponent,
      TaskComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
