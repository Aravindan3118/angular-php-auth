import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { NotificationService } from '../common/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service:UserService,private notificationService:NotificationService,private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    // console.log(this.service.form.value);
    this.service.addUser(this.service.form.value).subscribe(res=> {
      console.log(res)
      this.notificationService.success('Submitted successfully');
      this.service.form.reset();
      this._router.navigate(['/login']);
    }    
      )
    
  }
}
