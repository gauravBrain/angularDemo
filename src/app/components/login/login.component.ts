import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '../../common/services/auth.service';
import { StorageService } from '../../common/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, StorageService]

})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  post: any;
  email: string = '';
  password: string = '';
  logirErr: string;
  loginResp: any;

  public options = {
    position: ["top", "right"],
    timeOut: 3000,
    lastOnBottom: true
  }

  constructor(private fb: FormBuilder, private _AuthService: AuthService, private router: Router,
    private storage: StorageService, private notiService: NotificationsService) {
    this.loginForm = fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      password: [null, Validators.required]
    })
  }

  login(params): any {
    this._AuthService.login(params)
      .subscribe((result: any) => {
        if (result.status === 1) {

          this.notiService.success('Item created!', 'Click to undo...', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true
          });
         
          this.storage.setToken(result.response.accessToken);
          this.router.navigate(['/', 'dashboard']);
          this.loginResp = result;
        } else {
          this.logirErr = 'Wrong credentials';
        }
      }
        , err => {
          console.log('Error in login Response', err);
        });
  }


  ngOnInit() {

  }
 
}
