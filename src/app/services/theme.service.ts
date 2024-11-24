import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../enum/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: Theme = Theme.light;
  private theme = new BehaviorSubject<boolean>(false);

  currentTheme$ = this.theme.asObservable();

  setTheme(theme: Theme): void {
    this.activeTheme = theme;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.activeTheme);
  }

  toggleTheme(value: boolean): void {
    if (this.activeTheme === Theme.light) {
      this.setTheme(Theme.dark);
      this.theme.next(value);
    } else {
      this.setTheme(Theme.light);
      this.theme.next(value);
    }
  }

  getActiveTheme(): Theme {
    return this.activeTheme;
  }
}
