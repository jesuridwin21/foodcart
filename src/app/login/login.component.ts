import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userName! : any[]

  signupform: FormGroup = this.formbuilder.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  rememberMe!: boolean;

  // loginform! : FormGroup;
  // submitted: boolean | undefined;
  // email: string | undefined;
  // password: string | undefined;


  constructor(
    private Router: Router,
    private formbuilder: FormBuilder,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
    const userNameCache = localStorage.getItem('username-cache');
    const passwordCache = localStorage.getItem('password-cache');
    this.loginObj.userName = userNameCache || '';
    this.loginObj.password = passwordCache || '';
    if (userNameCache && passwordCache) {
      this.rememberMe = true
    } else {
      this.rememberMe = false
    }


    this.signupform = this.formbuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }

    // this.rememberMe = false;
  }

  ngOnDestroy() {
    this.signupUsers = [];
  }





  onSignup() {
    const formValue = this.signupform.value;
    this.signupUsers.push(formValue);
    this.toast.success({ detail: "Success", summary: "User Registered", duration: 3000 })
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      // alert('Login Successfull');
      this.toast.success({ detail: "Success Message", summary: "Login Successfull", duration: 5000 })
      localStorage.setItem('current-user', JSON.stringify(isUserExist))

      if (this.rememberMe) {
        localStorage.setItem('username-cache', this.loginObj.userName);
        localStorage.setItem('password-cache', this.loginObj.password);
      } else {
        localStorage.removeItem('username-cache');
        localStorage.removeItem('password-cache');
      }

      this.Router.navigate(['./app/homescreen'])
    } else {
      this.toast.error({ detail: "Error Message", summary: "Login Failed", duration: 5000 })
      // alert('Use valid id');
    }

  }
  rememberMeChange(event: any) {
    this.rememberMe = event.target.checked
  }


  // get f() { return this.loginform.controls; }

  // checkbox() {
  //   this.submitted = true;
  //   console.log(this.loginform.value)
  //   // this.email== "admin@gmail.com"&& this.password== "admin"
  //   if(this.loginform.invalid) {
  //     return;
  //   } else {

  //     let data: any = this.loginform.value;
  //     this.Router.navigate(['./homescreen'],{
  //       queryParams:{data:JSON.stringify(data)}
  //     });
  //   }

  // }

}
