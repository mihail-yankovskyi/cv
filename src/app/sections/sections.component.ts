import { Component, OnInit } from '@angular/core';
import { ISection } from '../interfaces/ISection';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  darkTheme: boolean = false;

  sections: ISection[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 8 },
        { name: 'TypeScript', level: 8 },
        { name: 'HTML', level: 9 },
        { name: 'CSS', level: 9 },
        { name: 'Python', level: 6 },
        { name: 'Java', level: 6 },
        { name: 'C++', level: 5 },
        { name: 'C#', level: 3 }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Angular', level: 8 }
      ]
    },
    {
      title: 'Libraries',
      skills: [
        { name: 'RxJS', level: 7 },
        { name: 'NgRx', level: 7 }
      ]
    },
    {
      title: 'UI Frameworks',
      skills: [
        { name: 'Bootstrap', level: 7 },
        { name: 'Angular Material', level: 7 }
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
        { name: 'Angular CLI', level: 10 },
        { name: 'Npm', level: 10 },
        { name: 'Git', level: 8 },
        { name: 'SASS', level: 9 },
        { name: 'SCSS', level: 9 }
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
        { name: 'English', level: 9 },
        { name: 'German', level: 5 },
        { name: 'Latvian', level: 3 },
        { name: 'Ukrainian', level: 10 },
        { name: 'Russian', level: 10 }
      ]
    }
  ];

  constructor(private isDarkTheme: ThemeService) { }

  ngOnInit(): void {
    this.isDarkTheme.currentTheme$.subscribe(value => {
      this.darkTheme = value;
    })
  }

}
