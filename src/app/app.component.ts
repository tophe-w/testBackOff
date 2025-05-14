import { Component } from '@angular/core';
import { ButtonCustomComponent } from './shared';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonCustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testBackOff';
}
