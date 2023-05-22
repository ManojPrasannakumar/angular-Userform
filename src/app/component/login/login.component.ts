import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: 'email@ex.com';
  @ViewChild('loginform') userform:any ;
  @ViewChild('emailData') emailData:any ;

  defaultCode='set your code';
  defaultUser='patient';
  constructor(private userServ:UserService){}

  loginUser(loginform:any){
    if(loginform.valid){
      this.userServ.changeLoginStatus(true);
    }
  }

  usingViewChild(){
    console.log('userform',this.userform);
  }
}
