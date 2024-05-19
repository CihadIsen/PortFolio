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
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private elementRef: ElementRef
  ) {}

  liveTest(index: number) {
    const pageUrls = [
      'https://cihad-isen.de/Join/logIn.html',
      'https://cihad-isen.de/ElPolloLoco/index.html',
      'https://www.cihad-isen.de'
    ];

    window.open(pageUrls[index], 'blank');
  }


  githubTest(index: number) {
    const pageUrls = ["https://github.com/CihadIsen/JOIN","https://github.com/CihadIsen/ElPolloLoco","https://github.com/CihadIsen/PortFolio"];

    window.open(pageUrls[index], "blank")
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

  /*@HostListener('window:scroll', ['$event'])
  addActiveClassToSkillSection(event: Event) {
    const skillSection =
      this.elementRef.nativeElement.querySelector('.main-container');
    const distanceFromTop = skillSection.offsetTop;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const offset = 500;

    if (scrollPosition > distanceFromTop - offset) {
      skillSection.classList.add('active');
    } else {
      skillSection.classList.remove('active');
    }
  }*/

  








}
