import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import {
  faEdit,
  faPaperPlane,
  faPlay,
  faPuzzlePiece,
  faShareSquare,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import jwtDecode from "jwt-decode";
import { ToastrService } from "ngx-toastr";

import { StoreService } from "src/app/core/services/store/store.service";
import Swal from "sweetalert2";

@Component({
  selector: "escroom-especific-room",
  templateUrl: "./especific-room.component.html",
  styleUrls: ["./especific-room.component.css"],
})
export class EspecificRoomComponent implements OnInit {
  faHint = faPuzzlePiece;

  faStart = faPlay;

  faSend = faPaperPlane;

  faEdit = faEdit;

  faShare = faShareSquare;

  faSpinner = faSpinner;

  isLoadingThePage: boolean = false;

  value: number = -1;

  questionForm: any | FormBuilder;

  answerForm: any | FormBuilder;

  tocreate: boolean = false;

  toedit: boolean = false;

  questions$ = this.storeService.question$;

  updatedQuestion: string = "";

  answerQuestion: string = "";

  hintQuestion: string = "";

  isAdmin: boolean = false;

  correctAnswer: number = -1;

  startGame: boolean = false;

  newQuestion: object = {};

  @Input() tryAnswer!: string;

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.questions$.next([]);
    this.isUserAdmin();
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

  getToken() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      return userLogged.token;
    }
    return null;
  }

  token: string = this.getToken();

  userToken: any = jwtDecode(this.token);

  isUserAdmin() {
    if (this.userToken.isAdmin === true) {
      this.isAdmin = true;
    }
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

  onStart() {
    this.startGame = !this.startGame;
    this.toastr.success("Correct answer");
  }

  onAnswer(answer: any, i: number) {
    if (answer === this.answerQuestion.toLowerCase()) {
      this.toastr.success("Correct answer");
      this.correctAnswer = i;
    } else {
      this.toastr.error("Wrong answer");
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

  blurHintEvent(event: any) {
    this.hintQuestion = event.currentTarget.id;
    Swal.fire("", this.hintQuestion, "question");
  }

  openNewTab() {
    window.open("https://escroom.netlify.app/myplace/home");
  }
}
