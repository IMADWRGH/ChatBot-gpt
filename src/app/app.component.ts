import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentAction: any;

  constructor(private router: Router) { }

  actions = [
    { route: '/home', title: 'HOME', 'icon': 'house-dash-fill' },
    { route: '/gpt', title: 'GPT', 'icon': 'person-fill' }
  ]
  handleRoute(action: any) {
    this.currentAction = action;
    this.router.navigateByUrl(action.route);
  }
}
