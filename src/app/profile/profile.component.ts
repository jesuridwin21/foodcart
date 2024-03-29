import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { CountryCode } from '../types/receipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('fileInput', { static: true }) fileInput: any;

  url = "./assets/logo.png";

  profileform: FormGroup = this.formBuilder.group({
    username: [''],
    email: [''],
    dob: ['']
  })
  submitted = false;
  userProfile: any = {};
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authservice: Authservice,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.authservice.userProfile$.subscribe(userProfile => {
      this.userProfile = userProfile;
      this.profileform.setValue({
        username: this.userProfile.userName,
        email: this.userProfile.email,
        dob: this.userProfile.dob || '',
        // mobileCode: CountryCode.india
      })
    })

  }

  // onReset() {
  //   this.submitted = false;
  //   this.profileform.reset();

  // }

  onSubmit() {
    this.submitted = true;
    this.toast.success({ detail: "Success", summary: "Profile Updated Successfully", duration: 3000 })
    if (this.profileform.invalid) {
      return;
    } else {
      let updatedUserProfile: any = this.profileform.value;
      const profileWithImage = { ...updatedUserProfile, profileImage: this.url }
      this.authservice.updateUserProfile(profileWithImage);
    }

  }

  uploadImage() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", () => {
        const base64String = fileReader.result as string;
        this.url = base64String;
      });
    }
  }

}
