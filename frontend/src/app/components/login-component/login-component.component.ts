import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
 form!:FormGroup 

  constructor(
    private auth: AuthService,
    private fb:FormBuilder,
    private route:Router,
    private toastr:ToastrService
    ) { }

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
        // console.log(response);   
        if(response.message){
          console.log(response.message);
          this.toastr.error(response.message);
          return           
        }
        this.route.navigate(['profile',response.id])    
      },
      error:(err:any)=>{
        this.toastr.error(err.error.message);
        
      }
    })
    // console.log(this.form.value);    
  }
  
}
