import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
 form!:FormGroup 

  constructor(private auth: AuthService,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.iniform();
  }
  iniform(){
    this.form = this.fb.group(
      {
        email: [, [Validators.required, Validators.minLength(4),Validators.email]],
        password: [, [Validators.required, Validators.minLength(4)]]
      }
    );
  }
  Login():void{
    this.auth.login(this.form.getRawValue()).subscribe({
      next: (response: any) => {
        console.log(response);   
        this.route.navigate(['/login-user'])    
      },
    })
    console.log(this.form.value);    
  }
  
}
