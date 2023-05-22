import { Component, EventEmitter, Output } from '@angular/core';
import { UserService, userType } from 'src/app/services/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {

    loading = false;
    empName: string;
    empGender: string;
    empTech:string;
    isDisabled=true;

    constructor(private userServ:UserService){}
    
    addUserForm(){
    this.loading = true;
    console.log('User Added',this.empGender,this.empName,this.empTech);

    setTimeout(() =>{
      this.userServ.newUserData({
        empName:this.empName,
        empGender:this.empGender,
        empTech:this.empTech
      });
      this.loading = false;
      this.empName=' ';
      this.empGender='';
      this.empTech='';
    },2000)
  }

  
  checkDisabled(){
    if(this.empName && this.empName.trim()!==''){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
}
