import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/serices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user:any={};

  constructor(private authservice:AuthService) {}

  ngOnInit(): void {}
  login(){
    alert('Login is clicked')
    console.log('user',this.user)
  //  this.authservice.registerUser(this.user).subscribe((data)=>{this.user=data})
  }
}
