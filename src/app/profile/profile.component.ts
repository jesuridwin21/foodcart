import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileform! : FormGroup;
  submitted = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onReset() {

  }

  onSubmit() {
    this.submitted = true;

    if(this.profileform.invalid) {
      return;
    } else {
      let data: any = this.profileform.value;
      this.router.navigate(['./header'],{
        queryParams:{data:JSON.stringify(data)}
      })
    }

  }

}
