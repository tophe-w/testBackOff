import { Component } from '@angular/core';
import { ButtonCustomComponent, SideBarComponent } from './shared';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SideBarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'testBackOff';

  navigateTo(path: string) {
    console.log(path);
  }
}
