import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../services/auth.service';

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
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: Authservice) { }

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
    if (this.profileform.invalid) {
      return;
    } else {
      let updatedUserProfile: any = this.profileform.value;
      this.authservice.updateUserProfile(updatedUserProfile);
    }

  }

}
