import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-myplacelogin",
  templateUrl: "./myplacelogin.component.html",
  styleUrls: ["./myplacelogin.component.css"],
})
export class MyplaceloginComponent implements OnInit {
  loginForm: any | FormBuilder;

  constructor(
    private formBuilder: FormBuilder,
    public storeService: StoreService,
    public router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.storeService.loginUserNode(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(["/myplace/admin"]);
      },
      error: (e) => {
        const loginError = e.error.error;
        this.toastr.error(loginError);
      },
    });
  }
}
