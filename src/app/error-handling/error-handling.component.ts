import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent {
  constructor( private router: Router) {}

   home() {
    this.router.navigate(['']);
  }

}
