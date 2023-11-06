import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'coding';

  circles: { isGrey: boolean }[] = [];

  addCircle():void {
    this.circles.push({ isGrey: false });
  }

  toggleColor(index: number) {
    this.circles[index].isGrey = !this.circles[index].isGrey;
  }

  greyCircleCount():number {
    return this.circles.filter(circle => circle.isGrey).length;
  }
}

export interface Circle{
  color:string;
}