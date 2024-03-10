import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CokpitComponent } from './cokpit/cokpit.component';

@NgModule({
  declarations: [AppComponent, ServerElementComponent, CokpitComponent,],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
