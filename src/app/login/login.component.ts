import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NotificationService } from '../common/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService,private notificationService:NotificationService,private _router:Router) { }
  user;
  ngOnInit() {
    console.log(localStorage);
  }
  login(){
    this.service.loginUser(this.service.loginForm.value).subscribe(
      res => {
        if(res){
          this.notificationService.success('Logged In Successfully');
          console.log(res);
          this.user=res;
          localStorage.setItem('authUserName',this.user.data.email);   
          // console.log(localStorage);
          
          this._router.navigate(['/home']);       
        }
        else{
          this.notificationService.warn('Invalid email or password');                  
        }        
      }
      
    );
  }
}
