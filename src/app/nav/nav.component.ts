import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginClick() {
    const URL = "https://ebuy-web.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=1nh2j7eflfk37c5u2cmu7melvn&redirect_uri=http://localhost:4200";
    window.location.assign(URL);
  }

}
