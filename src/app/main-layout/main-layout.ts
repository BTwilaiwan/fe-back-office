import { Component } from '@angular/core';
import { LeftMenuComponent } from '../shared/components/left-menu/left-menu';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  imports: [ LeftMenuComponent, NavBarComponent, RouterOutlet ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
