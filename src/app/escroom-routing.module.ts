import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApiusersComponent } from "./components/apiusers/apiusers.component";
import { EspecificRoomComponent } from "./components/especific-room/especific-room.component";
import { LatestusersComponent } from "./components/latestusers/latestusers.component";
import { MyplaceadminComponent } from "./components/myplaceadmin/myplaceadmin.component";
import { MyplacehomeComponent } from "./components/myplacehome/myplacehome.component";
import { MyplaceloginComponent } from "./components/myplacelogin/myplacelogin.component";
import { MyplaceprofileComponent } from "./components/myplaceprofile/myplaceprofile.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RegisterComponent } from "./components/register/register.component";
import { RoomComponent } from "./components/room/room.component";
import { SigninComponent } from "./components/signin/signin.component";
import { GuardService } from "./core/services/guard/guard.service";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: RoomComponent, canActivate: [GuardService] },
  { path: "profile", component: ProfileComponent, canActivate: [GuardService] },
  {
    path: "node",
    component: EspecificRoomComponent,
    canActivate: [GuardService],
  },
  { path: "myplace/home", component: MyplacehomeComponent },
  { path: "myplace/profiles", component: MyplaceprofileComponent },
  { path: "myplace/admin", component: MyplaceadminComponent },
  { path: "myplace/api/users", component: LatestusersComponent },
  { path: "myplace/api/users/latest", component: ApiusersComponent },
  { path: "myplace/login", component: MyplaceloginComponent },
  { path: "**", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
