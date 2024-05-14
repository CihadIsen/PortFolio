import { Component } from '@angular/core';
import { NavbarComponent } from '../../main-content/front-page/navbar/navbar.component';
import { FrontPageComponent } from '../../main-content/front-page/front-page.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FrontPageComponent,NavbarComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}
