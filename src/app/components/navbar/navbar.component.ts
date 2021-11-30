import { Component } from "@angular/core";
import { faFlag, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "escroom-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  faHome = faHome;

  faFlag = faFlag;

  faUser = faUser;
}
