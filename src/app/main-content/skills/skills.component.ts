import { Component,HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(private elementRef: ElementRef) {}

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
}
