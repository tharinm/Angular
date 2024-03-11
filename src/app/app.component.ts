import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [
    `
      h3 {
        color: #ff006a;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ANGULAR TO DEEP HDKDN';
  name = 'Tharindu';

  serverElement = [
    {
      type: 'Server',
      name: 'Testserver',
      content: 'Just a test !',
    },
  ];
}
