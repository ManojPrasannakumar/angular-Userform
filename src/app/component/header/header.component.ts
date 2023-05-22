import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export type pageType = 'add'|'all';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userServ:UserService){}

  @Output() currentPage = new EventEmitter<pageType>();
  showUserForm(){
    this.currentPage.emit('add');
  }

  showAllUser(){
    this.currentPage.emit('all');
  }

  logout(){
    this.userServ.changeLoginStatus(false); 
  }
}
