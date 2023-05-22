import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userformheader',
  templateUrl: './userformheader.component.html',
  styleUrls: ['./userformheader.component.scss']
})
export class UserformheaderComponent {

  @Input() isDisabled=false;
  
  
}
