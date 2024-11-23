import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() toggleDrawer = new EventEmitter<number>();
  @Output() isDarkThemeSend = new EventEmitter<boolean>();

  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) { }

  openDrawer(index: number) {
    this.toggleDrawer.emit(index);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.toggleTheme(this.isDarkTheme);
    this.isDarkThemeSend.emit(this.isDarkTheme);
  }
}
