import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { SatabindingassignmentComponent } from './satabindingassignment/satabindingassignment.component';
import { Assignment3Component } from './assignment3/assignment3.component';  // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    SatabindingassignmentComponent,
    Assignment3Component,
  ],
  imports: [BrowserModule, FormsModule],  // Add FormsModule to the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
