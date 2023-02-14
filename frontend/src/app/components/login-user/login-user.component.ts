import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
templateUrl:'./login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
   user:any;
   id:String=""
  constructor(private auth:AuthService,
    private actRoute:ActivatedRoute,

  
    ) { }

  ngOnInit(): void {
    this.id=this.actRoute.snapshot.params["id"]
    if(this.id!=""){
      this.auth.getUserById(this.id).subscribe({
        next:(res:any)=>{
          this.user=res
        }
      })
    }
    
    
  }
  displayuser(id:any){
    this.auth.getUserById(id).subscribe((res)=>{
      console.log(res);
      console.log(res.email);
      
    })
  }
}

