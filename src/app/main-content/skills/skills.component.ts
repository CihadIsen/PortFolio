import { Component,HostListener, ElementRef, OnInit } from '@angular/core';
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
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent  implements OnInit {
  constructor(
    private translateService: TranslateService,
    private elementRef: ElementRef
  ) {}

  @HostListener('window:scroll', ['$event'])
  addActiveClassToSkillSection(event: Event) {
    const skillSection =
      this.elementRef.nativeElement.querySelector('.main-container');
    const distanceFromTop = skillSection.offsetTop;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const offset = 600;

    if (scrollPosition > distanceFromTop - offset) {
      skillSection.classList.add('active');
    } else {
      skillSection.classList.remove('active');
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
