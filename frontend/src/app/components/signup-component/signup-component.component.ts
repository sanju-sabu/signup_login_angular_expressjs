import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  form!:FormGroup
  constructor(private auth:AuthService,
    private http:HttpClient,
    private route:Router,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
  }

  signUp(){
    this.auth.signup(this.form.getRawValue()).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.route.navigate(['/login'])
        
      }
    })
  }

  createForm(){
    this.form = this.fb.group(
      {
        firstname: [, [Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z]+$")]],
        lastname: [, [Validators.required, Validators.minLength(1), Validators.pattern("^[a-zA-Z]+$")]],
        email: [, [Validators.required, Validators.minLength(4)]],
        password: [, [Validators.required, Validators.minLength(8)]],
        password2: [, [Validators.required, Validators.minLength(8)]]
      }
    )
  }
}
