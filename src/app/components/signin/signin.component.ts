import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm: any | FormGroup;

  errorMessage: string = "";

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.storeService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(["/dashboard"]);
      },
      error: (e) => {
        const loginError = e.error.error;
        this.errorMessage = loginError;
      },
    });
  }
}
