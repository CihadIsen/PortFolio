import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(private elementRef: ElementRef) {}

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
}
