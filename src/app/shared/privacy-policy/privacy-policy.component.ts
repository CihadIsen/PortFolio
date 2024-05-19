import { Component } from '@angular/core';
import { NavbarComponent } from '../../main-content/front-page/navbar/navbar.component';
import { FrontPageComponent } from '../../main-content/front-page/front-page.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FrontPageComponent, NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
