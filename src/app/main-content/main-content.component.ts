import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontPageComponent } from './front-page/front-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavbarComponent, FrontPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
