import { Component, Inject } from '@angular/core';
import { UserService} from '../../services/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { userType } from '../allusers/allusers.component';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent {
  
  empName: string;
  empGender: string;
  empTech:string;
  position:number|undefined;
  isDisabled=true;

  constructor(public dialogRef: MatDialogRef<UsereditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: userType,private userServ:UserService){
      this.empName=data.empName;
      this.empGender=data.empGender;
      this.empTech=data.empTech;
      this.position = data.position;
    }
    
  editUser(){
    this.userServ.updateUserData({
      empName:this.empName,
      empGender:this.empGender,
      empTech:this.empTech,
      position:this.position
    });   
    console.log( this.empName,  this.empGender ,this.empTech);
    this.dialogRef.close();
  }
 
  checkDisabled(){
    if(this.empName && this.empName.trim()!==''){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
}
