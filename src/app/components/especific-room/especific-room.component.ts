import { AfterViewInit, Component } from "@angular/core";
import {
  faPaperPlane,
  faPlay,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-especific-room",
  templateUrl: "./especific-room.component.html",
  styleUrls: ["./especific-room.component.css"],
})
export class EspecificRoomComponent implements AfterViewInit {
  faHint = faPuzzlePiece;

  faStart = faPlay;

  faSend = faPaperPlane;

  questions$ = this.storeService.question$;

  constructor(public storeService: StoreService) {}

  ngAfterViewInit() {
    this.questions$.next({});
  }

  func(p: any) {
    return p.toString().replace(/./g, "*");
  }
}
