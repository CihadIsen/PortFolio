import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

  constructor(private elementRef: ElementRef) {}

  liveTest(index: number) {
    const pageUrls = [
      'https://cihad-isen.developerakademie.net/JOIN/logIn.html',
      ' https://cihad-isen.developerakademie.net/elPolloLoco/index.html',
    ];

    window.open(pageUrls[index], 'blank');
  }


  githubTest(index: number) {
    const pageUrls = ["https://github.com/CihadIsen/JOIN","https://github.com/CihadIsen/ElPolloLoco","https://github.com/CihadIsen/PortFolio"];

    window.open(pageUrls[index], "blank")
  }

  @HostListener('window:scroll', ['$event'])
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
  }

  








}
