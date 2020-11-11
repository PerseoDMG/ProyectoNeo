import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { DataService } from './data.service';
import { UserNamesComponent } from './user-names/user-names.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'userList', component: UserListComponent},
  {path: 'userName', component: UserNamesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserNamesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  //Servicios
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
