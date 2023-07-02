import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Actividad 3';

  constructor(public router: Router) { }

  navigateToHome() {
    console.log("step to home");
     this.router.navigateByUrl('/home');
  }

}
