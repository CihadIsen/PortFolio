import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './shared/impressum/impressum.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MainContentComponent,
    FooterComponent,
    ImpressumComponent,
    PrivacyPolicyComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  languages = ['en', 'de'];
  private translateService: TranslateService;
  private router: Router;

  constructor(translateService: TranslateService, router: Router) {
    this.translateService = translateService;
    this.router = router;
  }

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' && !localStorage.getItem('reloaded')) {
          localStorage.setItem('reloaded', 'true');
          
        } else {
          localStorage.removeItem('reloaded');
        }
      }
    });
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  }
}
