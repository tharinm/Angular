import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [BrowserModule, ],  // Add FormsModule to the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
