import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};
 

  constructor(public accoutnService : AccountService) { }

  ngOnInit(): void {

  }

  login(){
    this.accoutnService.login(this.model).subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
    })
  }

  logout(){
    this.accoutnService.logout();
  }



}
