import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  alertFunction() {
    alert('Hello! This is a Warning');
  }

  allowUser = false;

  constructor() {
    setTimeout(() => {
      this.allowUser = true;
    }, 2000);
  }
}
