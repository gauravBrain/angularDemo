import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../common/services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  post: any;
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPass: string = '';
  signupResp: any;

  constructor(private fb: FormBuilder, private _AuthService: AuthService, private router: Router) {
    this.signupForm = fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      password: [null, Validators.required],
      confirmPass: [null, Validators.required]
    })

  }

  signup(params): any {
    this._AuthService.signup(params)
      .subscribe((result: any) => {
        if (result.status === 1)
          alert('Successfully Signup');
        this.router.navigate(['/', 'login']);
        this.signupResp = result;
      }
        , err => {
          console.log('Error in signup Response', err);
        });
  }



  ngOnInit() {
  }

}
