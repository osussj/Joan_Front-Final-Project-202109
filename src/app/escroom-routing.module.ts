import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomComponent } from "./components/room/room.component";
import { SigninComponent } from "./components/signin/signin.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "signin", component: SigninComponent },
  { path: "dashboard", component: RoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
