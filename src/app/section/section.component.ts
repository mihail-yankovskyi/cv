import { Component, Input, OnInit } from '@angular/core';
import { ISection } from '../interfaces/ISection';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section!: ISection;

  darkTheme: boolean = false;

  constructor(private isDarkTheme: ThemeService) {}

  ngOnInit() {
    this.setTheme();
  }

  setTheme(): void {
    this.isDarkTheme.currentTheme$.subscribe(value => {
      this.darkTheme = value;
    })
  }
}
