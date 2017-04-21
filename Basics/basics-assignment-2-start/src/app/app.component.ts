import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameEmpty = true;

  onUpdateUsername(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
    if (this.username != ''){
      this.usernameEmpty = false;
    } else {
      this.usernameEmpty = true;
    }
  }

  onResetUsername() {
    this.username = "";
    this.usernameEmpty = true;
  }
}
