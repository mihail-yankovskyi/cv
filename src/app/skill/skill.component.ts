import { Component, Input, OnInit } from '@angular/core';
import { ISection } from '../interfaces/ISection';
import { ISkill } from '../interfaces/ISkill';
import { ISkillTransformed } from '../interfaces/ISkillTransformed';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss'],
    standalone: false
})
export class SkillComponent implements OnInit {
  @Input() skills!: ISkill[];

  skillsTransformed!: ISkillTransformed[];

  ngOnInit(): void {
    this.transformSkills();
  }

  transformSkills(): void {
    this.skillsTransformed = this.skills.map((skill) => {
      return {
        ...skill,
        level: new Array(skill.level)
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  };
}
