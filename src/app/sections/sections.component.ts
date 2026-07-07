import { Component, OnInit } from '@angular/core';
import { ISection } from '../interfaces/ISection';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss'],
    standalone: false
})
export class SectionsComponent implements OnInit {
  darkTheme = false;

  sections: ISection[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'TypeScript', level: 10 },
        { name: 'JavaScript', level: 10 },
        { name: 'HTML', level: 10 },
        { name: 'CSS', level: 10 },
        { name: 'Python', level: 6 },
        { name: 'Java', level: 6 },
        { name: 'C#', level: 5 },
        { name: 'C++', level: 5 }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Angular', level: 10 },
      ]
    },
    {
      title: 'API architectures',
      skills: [
        { name: 'REST API', level: 10 },
        { name: 'GraphQL', level: 9 }
      ]
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'RxJS', level: 9 },
        { name: 'NgRx', level: 8 }
      ]
    },
    {
      title: 'UI Frameworks',
      skills: [
        { name: 'Angular Material', level: 8 },
        { name: 'Bootstrap', level: 7 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 4 },
        { name: 'H2', level: 4 }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', level: 10 },
        { name: 'Angular CLI', level: 10 },
        { name: 'Npm', level: 10 },
        { name: 'SCSS', level: 10 },
        { name: 'SASS', level: 9 }
      ]
    },
    {
      title: 'AI tools',
      skills: [
        { name: 'Claude Code', level: 10 },
        { name: 'Copilot', level: 9 },
        { name: 'ChatGPT Codex', level: 8 }
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Windows', level: 10 },
        { name: 'Ubuntu', level: 9 },
        { name: 'MacOS', level: 9 }
      ]
    },
    {
      title: 'Speaking Languages',
      skills: [
        { name: 'English', level: 10 },
        { name: 'Ukrainian', level: 10 },
        { name: 'Russian', level: 10 },
        { name: 'German', level: 5 },
        { name: 'Latvian', level: 3 }
      ]
    }
  ];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.setTheme();
  }

  setTheme(): void {
    this.themeService.currentTheme$.subscribe(value => {
      this.darkTheme = value;
    })
  }

  trackByIndex(index: number): number {
    return index;
  };
}
