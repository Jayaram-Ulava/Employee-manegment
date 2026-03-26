import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { AllEmployesComponent } from './components/all-employes/all-employes.component';
import { CreateEmployComponent } from './components/create-employ/create-employ.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'dashbord',component:DashbordComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'allemployes',component:AllEmployesComponent},
    {path:'createemploy',component:CreateEmployComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
