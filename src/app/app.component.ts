import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-php-auth';
  constructor(private router: Router) { }
  signOut(){
    localStorage.removeItem('authUserName');
    this.router.navigate(['/login']);
  }
}
