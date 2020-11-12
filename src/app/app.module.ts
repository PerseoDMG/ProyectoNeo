import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes } from "./app.routes";

import { DataService } from './data.service';




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
    Routes
  ],
  //Servicios
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
