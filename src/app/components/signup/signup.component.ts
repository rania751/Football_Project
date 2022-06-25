import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  passwordptn='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(5)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.maxLength(12),Validators.pattern(this. passwordptn)]]
    });
  }

  signup(){

    alert('signup')
    console.log('added',this.signupForm.value)
  }

}
