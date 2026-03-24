import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-nav-bar',
  imports: [ AvatarModule ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBarComponent {

}
