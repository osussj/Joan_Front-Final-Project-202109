import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./escroom-routing.module";
import { AppComponent } from "./escroom.component";
import { RoomService } from "./core/services/room/room.service";
import { RoomComponent } from "./components/room/room.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SigninComponent } from "./components/signin/signin.component";
import { EspecificRoomComponent } from "./components/especific-room/especific-room.component";
import { MyplacehomeComponent } from "./components/myplacehome/myplacehome.component";
import { MyplaceprofileComponent } from "./components/myplaceprofile/myplaceprofile.component";
import { MyplaceadminComponent } from "./components/myplaceadmin/myplaceadmin.component";
import { LatestusersComponent } from "./components/latestusers/latestusers.component";
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    NavbarComponent,
    SigninComponent,
    EspecificRoomComponent,
    MyplacehomeComponent,
    MyplaceprofileComponent,
    MyplaceadminComponent,
    LatestusersComponent,
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
