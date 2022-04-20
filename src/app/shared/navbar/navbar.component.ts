import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  term = '';

  constructor(private router: Router) {
  }

  onTermInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  getUrl(){
    return this.router.url;
  }
}
