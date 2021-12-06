import { AfterViewInit, Component, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  faEdit,
  faPaperPlane,
  faPlay,
  faPuzzlePiece,
  faShareSquare,
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

  faEdit = faEdit;

  faShare = faShareSquare;

  value: number = -1;

  questionForm: any | FormBuilder;

  answerForm: any | FormBuilder;

  tocreate: boolean = false;

  toedit: boolean = false;

  questions$ = this.storeService.question$;

  updatedQuestion: string = "";

  answerQuestion: string = "";

  newQuestion: object = {};

  @Input() tryAnswer!: string;

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder
  ) {}

  ngAfterViewInit() {
    this.questions$.next([]);

    this.questionForm = this.formBuilder.group({
      question: ["", Validators.required],
      answer: ["", Validators.required],
      hint: ["", Validators.required],
    });
    this.answerForm = this.formBuilder.group({
      userAnswer: ["", Validators.required],
    });
  }

  func(p: any) {
    return p.toString().replace(/./g, "*");
  }

  onCreate() {
    this.storeService.sendQuestion(this.questionForm.value).subscribe();
    this.answerForm.reset();
    this.questionForm.reset();
    this.tocreate = !this.tocreate;
    this.questions$.next([]);
  }

  toCreate() {
    this.tocreate = !this.tocreate;
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight + 20,
      behavior: "smooth",
    });
  }

  toEdit(i: any) {
    this.toedit = !this.toedit;
    this.value = i;
  }

  onDelete(id: string) {
    this.storeService.deleteQuestion(id).subscribe();
    this.questions$.next([]);
  }

  onAnswer(answer: string) {
    if (answer === this.answerQuestion) {
      console.log("correcte");
    } else {
      console.log("merda");
    }
  }

  onEdit(question: object) {
    this.newQuestion = { ...question, question: this.updatedQuestion };
    this.storeService.updateQuestion(this.newQuestion).subscribe();
    this.value = -1;
    this.questions$.next([]);
  }

  blurEvent(event: any) {
    this.updatedQuestion = event.target.value;
  }

  blurAnswerEvent(event: any) {
    this.answerQuestion = event.target.value;
  }
}
