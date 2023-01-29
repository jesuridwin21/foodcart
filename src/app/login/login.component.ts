import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userName! : any[]

  signupform! : FormGroup

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
  

  constructor( private Router: Router, private formbuilder : FormBuilder) { }

  ngOnInit(): void { 
    this.signupform = this.formbuilder.group ({
      userName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }

    //  Remember me function

    this.rememberMe = false;
    // this.autologin();

  }



  // results: object = new Object();

  onSignup() {

    // this.results = [{
    //   {
    //     "userName" : this.signupform.controls['userName'].value
    //   },
    //   {
    //     "email" : this.signupform.controls['email'].value
    //   },
    //   {
    //     "password" : this.signupform.controls['password'].value
    //   }
    // }]

    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined) {
      alert('Login Successfull');
      this.Router.navigate(['./homescreen'])
    } else {
      alert('Use valid id');
    }



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
