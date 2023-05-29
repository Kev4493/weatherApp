import { Component } from '@angular/core';

@Component({
  selector: 'app-side-screen',
  templateUrl: './side-screen.component.html',
  styleUrls: ['./side-screen.component.scss']
})
export class SideScreenComponent {

  constructor() {}

  unitC = true

  unitF;

  changeUnitToF() {
    if (this.unitC == true) {
      this.unitC = false;
      this.unitF = true;
    }
  }

  changeUnitToC() {
    if (this.unitF == true) {
      this.unitF = false;
      this.unitC = true;
    }
  }
}
