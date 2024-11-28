import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  title = 'CV Mihail Yankovskyi Web Developer';
  isDarkTheme: boolean = false;
  selectedIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  onChangeTheme(value: boolean) {
    this.isDarkTheme = value;
  }

  onOpenSidenav(index: number): void {
    this.sidenav.open();
    this.cdr.detectChanges();
    this.selectedIndex = index;
    this.tabGroup.selectedIndex = index;
  }

  onTabClicked(event: MatTabChangeEvent): void {
    this.selectedIndex = event?.index;
  }
}
