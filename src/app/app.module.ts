import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllusersComponent } from './users/allusers/allusers.component';
import { UsereditComponent } from './users/useredit/useredit.component';
import { UserformComponent } from './users/userform/userform.component';
import { HeaderComponent } from './component/header/header.component';
import { UserformheaderComponent } from './users/userform/userformheader/userformheader.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';
import { ReactiveUserformComponent } from './component/reactive-userform/reactive-userform.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
const allMaterialModule =[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  FlexLayoutModule,
  MatDialogModule,
  MatListModule,
  MatExpansionModule
];
@NgModule({
  declarations: [
    AppComponent,
    AllusersComponent,
    UsereditComponent,
    UserformComponent,
    HeaderComponent,
    UserformheaderComponent,
    LoginComponent,
    ReactiveUserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...allMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
