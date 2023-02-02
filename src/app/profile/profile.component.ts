import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileform: FormGroup = this.formBuilder.group({
    username: [''],
    email: [''],
    dob: ['']
  })
  submitted = false;
  userProfile: any = {};
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: Authservice,
    private toast: NgToastService
    ) { }

  ngOnInit(): void {
    this.authservice.userProfile$.subscribe(userProfile => {
      this.userProfile = userProfile;
      this.profileform.setValue({
        username: this.userProfile.userName,
        email: this.userProfile.email,
        dob: this.userProfile.dob || ''
      })
    })

  }

  onReset() {

  }

  onSubmit() {
    this.submitted = true;
    this.toast.success({detail: "Success", summary: "Profile Updated Successfully", duration: 3000})
    if (this.profileform.invalid) {
      return;
    } else {
      let updatedUserProfile: any = this.profileform.value;
      this.authservice.updateUserProfile(updatedUserProfile);
    }

  }

}
