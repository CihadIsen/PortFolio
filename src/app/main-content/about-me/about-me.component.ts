import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
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
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private elementRef: ElementRef
  ) {}

  @HostListener('window:scroll', ['$event'])
  addActiveClassToAboutMeSection(event: Event) {
    const aboutMeSection =
      this.elementRef.nativeElement.querySelector('.main-container');
    const distanceFromTop = aboutMeSection.offsetTop;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const offset = 500;

    if (scrollPosition > distanceFromTop - offset) {
      aboutMeSection.classList.add('active');
    } else {
      aboutMeSection.classList.remove('active');
    }
  }

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
