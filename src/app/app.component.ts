import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonCustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testBackOff';
}
