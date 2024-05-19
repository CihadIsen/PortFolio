import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/il8n/', '.json');
}

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [NavbarComponent, TranslateModule, CommonModule],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss',
})
export class FrontPageComponent implements OnInit {
  
  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}
