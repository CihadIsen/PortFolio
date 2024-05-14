import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './shared/impressum/impressum.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainContentComponent,FooterComponent, ImpressumComponent, PrivacyPolicyComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
