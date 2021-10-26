import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aspectRatioOptions: string[] = ['1:1', '1:2', '4:3', '5:3', '16:9', '16:10'];
  aspectRatio = '16:9';
}
