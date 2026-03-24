import { Component } from '@angular/core';
import { LeftMenuComponent } from '../shared/components/left-menu/left-menu';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar';
import { RouterOutlet } from "@angular/router";
import { LoadingService } from '../shared/service/loading';
import { BlockUI } from "primeng/blockui";
import { ProgressSpinner } from "primeng/progressspinner";
import { DefaultModules } from '../shared/modules/default-module'

@Component({
  selector: 'app-main-layout',
  imports: [ DefaultModules, LeftMenuComponent, NavBarComponent, RouterOutlet, BlockUI, ProgressSpinner ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

  constructor(
    public loadingService: LoadingService
  ) {}
}
