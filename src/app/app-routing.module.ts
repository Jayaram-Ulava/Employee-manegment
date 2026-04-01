import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { AllEmployesComponent } from './components/all-employes/all-employes.component';
import { CreateEmployComponent } from './components/create-employ/create-employ.component';
import { LoginComponent } from './components/login/login.component';
import { ViewEmpployesComponent } from './components/view-empployes/view-empployes.component';
import { AuthGuard } from './services/auth.guard';
import { ProductsComponent } from './components/products/products.component';
import { ItemployesComponent } from './components/itemployes/itemployes.component';
import { AcountrsComponent } from './components/acountrs/acountrs.component';

const routes: Routes = [
  {path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard], children:[
    {path:'home',component:HomeComponent},
    {path:'allemployes',component:AllEmployesComponent},
    {path:'createemploy',component:CreateEmployComponent},
    {path:'editeemploye/:id',component:CreateEmployComponent},
    {path:'viewempolye/:id',component:ViewEmpployesComponent},
    {path:'products',component:ProductsComponent},
    {path:'itemployes',component:ItemployesComponent},
    {path:'acountrs',component:AcountrsComponent},
    {path:'products',loadChildren:()=>import('./lezyloading/products/products.module').then(m=>m.ProductsModule)}
  ]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
