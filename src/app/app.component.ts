import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngulatApp';
  constructor(public service: AuthService)
  {
    console.log("App Component Created");
  }
ngOnInit(){
}
  signout()
  {
    this.service.Logout();
  }
}

