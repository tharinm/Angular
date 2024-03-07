import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css',
})
export class Assignment3Component {
  showHide: boolean = false;

  numberList = [];
  firstNum = 1;
  total = 0;
  showHidePara() {
    this.showHide = !this.showHide;
    this.total = this.firstNum + this.total;
  }
}
