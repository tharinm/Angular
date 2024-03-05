import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is warning</p>`,
  styles: [
    `
      p {
        color: #ff9800;
        padding: 20px;
        background-color: yellow;
        margin-top: 40px;
      }
    `,
  ],
})
export class WarningAlertComponent {}
