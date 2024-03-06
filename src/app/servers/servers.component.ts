import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  serverName = 'Hello';
  alertFunction() {
    alert('Hello! This is a Warning');
  }

  serverCreationStatus = 'no server was created';

  allowUser = false;

  constructor() {
    setTimeout(() => {
      this.allowUser = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName
  }

  // onUpdateServer(event: any) {
  //   this.serverName = event.target.value;
  // }
}
