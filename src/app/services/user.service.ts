import { EventEmitter, Injectable } from '@angular/core';

export interface userType {
  empName: string;
  position?: number;
  empGender: string;
  empTech:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:userType[]=[{
    empName: 'name',
    empGender: 'male',
    empTech:'tech',
    position:1
  }]

  loginStatus=false;
  loginEvent = new EventEmitter();

  constructor() { }

  newUserData = (userObj:userType)=>{
    const newUser = {...userObj,position:this.userData.length+1};
    this.userData.push(newUser);
  }

  updateUserData = (userObj:userType)=>{
    const userIndex=this.userData.findIndex(user=>user.position === userObj.position);
    console.log('userIndex',userIndex);
    this.userData[userIndex]= userObj;
  }

  changeLoginStatus(status:boolean){
    this.loginStatus= status;
    this.loginEvent.emit();
  }

}
