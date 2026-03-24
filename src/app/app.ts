import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './shared/service/language';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fe-back-office');

  constructor(
    private languageService: LanguageService
  ) {
    this.languageService.initLang();
  }
}
