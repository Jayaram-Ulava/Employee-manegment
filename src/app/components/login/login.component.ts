import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginsrv:LoginService, private routerlogin:Router){

  }

  loginform:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  login() {
    console.log(this.loginform.value);

   this.loginsrv.getlogin(this.loginform.value).subscribe((resdata:any)=>{
    alert('login successfull');
    this.routerlogin.navigateByUrl('dashbord/home');
    sessionStorage.setItem('logintoken', resdata.loginToken);
   })
  

}
}
