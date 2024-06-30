import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: string = "Result";
  random: number = 0;

  userOne: string = '';
  userTwo: string = '';

  calculateRate() {

    if ((this.userOne && this.userTwo) === '') {
      this.result = 'Please fill the input field.'
    } else {
      this.random = Math.floor(Math.random() * 101);

      if (this.random > 90) {
        this.result = `Best couple!  ${this.userOne} 🫂 ${this.userTwo} are meant to be together ${String(this.random)}%`;
        this.userOne = '';
        this.userTwo = '';
      } else if (this.random >= 60) {
        this.result = `A great match! ${this.userOne} 😍 ${this.userTwo} keep it going! ${String(this.random)}%`;
        this.userOne = '';
        this.userTwo = '';
      } else if (this.random >= 40) {
        this.result = `Not bad, ${this.userOne} 🤞 ${this.userTwo} but there's room for improvement ${String(this.random)}%`;
        this.userOne = '';
        this.userTwo = '';
      } else {
        this.result = `${this.userOne} 🥹 ${this.userTwo} it might be tough, but love can grow! ${String(this.random)}%`;
        this.userOne = '';
        this.userTwo = '';
      }

    }

  }
}
