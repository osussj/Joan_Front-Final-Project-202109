import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./escroom-routing.module";
import { AppComponent } from "./escroom.component";
import { RoomService } from "./core/services/room/room.service";
import { RoomComponent } from "./components/room/room.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, RoomComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
