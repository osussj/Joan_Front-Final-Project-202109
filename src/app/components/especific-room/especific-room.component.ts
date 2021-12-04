import { AfterViewInit, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
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

  questionForm: any | FormBuilder;

  tocreate: boolean = false;

  questions$ = this.storeService.question$;

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder
  ) {}

  ngAfterViewInit() {
    this.questions$.next({});
    this.questionForm = this.formBuilder.group({
      question: ["", Validators.required],
      answer: ["", Validators.required],
      hint: ["", Validators.required],
    });
  }

  func(p: any) {
    return p.toString().replace(/./g, "*");
  }

  onCreate() {
    this.storeService.sendQuestion(this.questionForm.value).subscribe();
    this.questions$.next({});
    this.questionForm.reset();
  }

  toCreate() {
    this.tocreate = !this.tocreate;
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight + 20,
      behavior: "smooth",
    });
  }
}
