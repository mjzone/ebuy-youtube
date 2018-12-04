import { Component, OnInit } from '@angular/core';
import Amplify, {API} from 'aws-amplify';
import aws_exports from '../../aws-exports';

Amplify.configure(aws_exports);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  params = {
    response: true
  }

  constructor() {}

  ngOnInit() {
  }

  getProducts() {
    API.get("ebuyapi", "/products", this.params).then(response => {
      debugger;
      // Add your code here
    }).catch(error => {
      debugger;
      console.log(error.response)
    });
  }

}
