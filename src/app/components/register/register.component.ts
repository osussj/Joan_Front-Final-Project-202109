import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: any | FormGroup;

  errorMessage: string = "";

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.storeService.registerUser(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigate(["/login"]);
      },
      error: (e) => {
        const loginError = e.error.error;
        this.errorMessage = loginError;
      },
    });
  }
}
