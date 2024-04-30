import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  liveTestJoin() {
    const pageUrls = [
      'https://cihad-isen.developerakademie.net/JOIN/logIn.html',
      ' https://cihad-isen.developerakademie.net/elPolloLoco/index.html',
    ];

    window.open(pageUrls[0], 'blank');
  }

  liveTestLoco() {
    const pageUrls = [
      'https://cihad-isen.developerakademie.net/JOIN/logIn.html',
      ' https://cihad-isen.developerakademie.net/elPolloLoco/index.html',
    ];

    window.open(pageUrls[1], 'blank');
  }

  githubjoin() {
    const pageUrls = ["https://github.com/CihadIsen/JOIN","https://github.com/CihadIsen/ElPolloLoco"];

    window.open(pageUrls[0], "blank")
  }

  githubloco() {
    const pageUrls = ["https://github.com/CihadIsen/JOIN","https://github.com/CihadIsen/ElPolloLoco"];

    window.open(pageUrls[1], "blank")
  }








}
