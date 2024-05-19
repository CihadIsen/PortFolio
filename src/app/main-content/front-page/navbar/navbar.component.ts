import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('burgerAnimation') burgerAnimation: ElementRef | undefined;
  languages = ['en', 'de'];

  menuOpen = false;
  animationStep = 0;
  animationDirection = 1;

  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.startAnimation();
    } else {
      this.reverseAnimation();
    }
  }
 

  startAnimation() {
    if (this.burgerAnimation) {
      const burgerAnimationElement = this.burgerAnimation.nativeElement;
      burgerAnimationElement.classList.add('animate');
    }
  }

  stepAnimation(burgerAnimation: Element) {
    setTimeout(() => {
      const classesToRemove = ['complete', 'start',  'finished'];
      
      // Entferne alle vorherigen Klassen
      burgerAnimation.classList.remove(...classesToRemove);
      
      if (this.animationStep === 0) {
        burgerAnimation.classList.add('animate');
      } else if (this.animationStep === 1) {
        burgerAnimation.classList.add('start-active');
      } else if (this.animationStep === 2) {
        burgerAnimation.classList.add('almost-active');
      }
      this.animationStep++;
      if (this.animationStep < 3) {
        this.stepAnimation(burgerAnimation);
      }
    }, 50); // Hier könnte die Dauer der Animation eingestellt werden
  }

  reverseAnimation() {
    if (this.burgerAnimation) {
      const burgerAnimationElement = this.burgerAnimation.nativeElement;
      burgerAnimationElement.classList.remove('animate');
    }
  }

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
