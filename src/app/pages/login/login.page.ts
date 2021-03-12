import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    
  payload: Object = {
    user_name: '',
    pass_word: ''
  };

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  login(): void{
    //API call for Login credentials
  }

}
