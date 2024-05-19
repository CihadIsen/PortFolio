import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './shared/impressum/impressum.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainContentComponent,FooterComponent, ImpressumComponent, PrivacyPolicyComponent, TranslateModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  languages = ['en','de'];
  private translateService = inject(TranslateService);
  ngOnInit(): void {
      const defaultLanguage = localStorage.getItem('language') ||'en';
      this.translateService.setDefaultLang(defaultLanguage);
      this.translateService.use(defaultLanguage);
  }

  changeLanguage(lang: string){
    this.translateService.use(lang);
    localStorage.setItem('language',lang);
  }

}
