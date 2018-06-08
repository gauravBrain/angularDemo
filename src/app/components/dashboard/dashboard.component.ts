import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../../common/services/auth.service';
import { StorageService } from '../../common/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [AuthService,StorageService]
})
export class DashboardComponent implements OnInit {

  constructor(private _AuthService: AuthService, private router: Router,private storage : StorageService) {}

  logoutResp : any;

  logout(){
    let accessToken = this.storage.getToken();
    this._AuthService.louout(accessToken)
    .subscribe((result: any) => {
      if (result.status === 1){
        alert('Successfully logout.');
        this.storage.removeToken(); 
        this.router.navigate(['/', 'login']);
        this.logoutResp = result;
      }
    }
      , err => {
        console.log('Error in login Response', err);
      });
  }


  ngOnInit() {
  }

}
