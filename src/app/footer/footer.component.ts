import { Component  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ImpressumComponent } from '../shared/impressum/impressum.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ImpressumComponent, CommonModule, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
