import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  private _snackBar: any;


  constructor(private loginsrv:LoginService, private routerlogin:Router, private snackBar: MatSnackBar) {

  }

  loginform:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  login() {
    console.log(this.loginform.value);

   this.loginsrv.getlogin(this.loginform.value).subscribe((resdata:any)=>{
this.snackBar.open('Login Successful', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    }); 
        this.routerlogin.navigateByUrl('dashbord/home');
    sessionStorage.setItem('logintoken', resdata.loginToken);
   })

  

}

   

}
