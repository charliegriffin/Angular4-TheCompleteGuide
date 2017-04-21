import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles : [`
    .off{
      display: none;
    }

    .later{
      color: white;
    }
  `]
})
export class AppComponent {
  showP = true;
  clicks = [];

  onToggleP() {
    this.showP = !this.showP;
    this.clicks.push(new Date());
  }

}
