import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UsereditComponent } from '../useredit/useredit.component';

import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface userType {
  empName: string;
  position?: number;
  empGender: string;
  empTech:string;
}

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'empName', 'empGender', 'empTech','edit'];
  dataSource = new MatTableDataSource<userType>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
    
  constructor(private userServ:UserService,private dialog: MatDialog){}

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<userType>(this.userServ.userData);
    this.dataSource.paginator = this.paginator;
    console.log(this.userServ.userData);
    /* 
    if(this.isUserInfo.length>0||undefined){
      this.isUserInfo=true;
    } */
  }

  editUser(element:userType){
    this.openDialog(element);
  }
  openDialog(element: userType): void {
    const dialogRef = this.dialog.open(UsereditComponent, {
      height: '400px',
      width: '40%',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource= new MatTableDataSource<userType>(this.userServ.userData);
    });
  }
}

const Emp_DATA: userType[] = [
];

