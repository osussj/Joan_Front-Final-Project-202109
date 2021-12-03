import { Component } from "@angular/core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./escroom.component.html",
  styleUrls: ["./escroom.component.css"],
})
export class AppComponent {
  constructor() {
    library.add(fas);
  }

  title = "escroomfront";
}
