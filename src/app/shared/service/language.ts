import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLang = signal<'th' | 'en'>('th');

  constructor(
    private translate: TranslateService
  ) {}

  initLang() {
    const saved = localStorage.getItem('lang') as 'th' | 'en';
    const init = saved || 'th';
    this.translate.use(init);
    this.currentLang.set(init);
  }

  switchLang() {
    const next = this.currentLang() === 'th' ? 'en' : 'th';
    this.translate.use(next);
    this.currentLang.set(next);
    localStorage.setItem('lang', next);
  }
}