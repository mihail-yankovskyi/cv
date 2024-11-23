import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: 'light-theme' | 'dark-theme' = 'light-theme';
  private theme = new BehaviorSubject<boolean>(false);

  currentTheme$ = this.theme.asObservable();

  setTheme(theme: 'light-theme' | 'dark-theme') {
    this.activeTheme = theme;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.activeTheme);
  }

  toggleTheme(value: boolean) {
    if (this.activeTheme === 'light-theme') {
      this.setTheme('dark-theme');
      this.theme.next(value);
    } else {
      this.setTheme('light-theme');
      this.theme.next(value);
    }
  }

  getActiveTheme() {
    return this.activeTheme;
  }
}
