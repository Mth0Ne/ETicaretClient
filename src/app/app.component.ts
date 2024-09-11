import { Component } from '@angular/core';
import * as $ from 'jquery';  // Ensure jQuery is properly imported

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor() {
    // Call jQuery API only if window is defined (client-side rendering check)
    if (typeof window !== 'undefined') {
      $.get("https://localhost:7145/api/Products", (data) => {
        console.log("Data from API: ", data);
      });
    }
  }
}
