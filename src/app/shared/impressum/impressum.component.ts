import { Component, OnInit, ElementRef } from '@angular/core';
import { NavbarComponent } from '../../main-content/front-page/navbar/navbar.component';
import { FrontPageComponent } from '../../main-content/front-page/front-page.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/il8n/', '.json');
}

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FrontPageComponent, NavbarComponent, TranslateModule, CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {
  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    if (!localStorage.getItem('pageOpened')) {
      localStorage.setItem('pageOpened', 'true'); // Setze das Flag, dass die Seite geöffnet wurde
      window.location.reload(); // Lade die Seite neu
    }
    window.scrollTo(0, 0);

    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  }
}
