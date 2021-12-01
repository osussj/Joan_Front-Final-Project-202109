import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomComponent } from "./components/room/room.component";
import { SigninComponent } from "./components/signin/signin.component";
import { GuardService } from "./core/services/guard/guard.service";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "dashboard", component: RoomComponent, canActivate: [GuardService] },
  { path: "**", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
