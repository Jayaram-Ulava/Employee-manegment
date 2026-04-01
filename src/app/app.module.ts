import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { CreateEmployComponent } from './components/create-employ/create-employ.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AllEmployesComponent } from './components/all-employes/all-employes.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmpployesComponent } from './components/view-empployes/view-empployes.component';
import { ProductsComponent } from './components/products/products.component';
import { ItemployesComponent } from './components/itemployes/itemployes.component';
import { AcountrsComponent } from './components/acountrs/acountrs.component';
import { AllproductsComponent } from './lezyloading/allproducts/allproducts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    CreateEmployComponent,
    HomeComponent,
    LoginComponent,
    AllEmployesComponent,
    ViewEmpployesComponent,
    ProductsComponent,
    ItemployesComponent,
    AcountrsComponent,
    AllproductsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
        MatTableModule,
    CommonModule,
    RouterModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
