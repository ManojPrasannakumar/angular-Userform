import { Component, OnInit } from '@angular/core';
import { pageType } from './component/header/header.component';
import { userType } from './users/allusers/allusers.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentPage = 'add';
  userInfo:userType[] = [];
  loginStatus= false;

  constructor(private userServ:UserService){}

  changeCurrentpage(value:pageType){
    console.log('value',value)
    this.currentPage=value;
  }
  ngOnInit(){
    this.userServ.loginEvent.subscribe(()=>{
      this.loginStatus = this.userServ.loginStatus
    })
  }

}
