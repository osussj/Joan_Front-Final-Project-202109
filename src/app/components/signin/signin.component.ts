import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm: any | FormGroup;

  users$ = this.storeService.user$;

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.users$.next(this.loginForm.value);
    this.storeService.userSubject$.subscribe((data) =>
      localStorage.setItem("user", JSON.stringify(data))
    );
  }
}
