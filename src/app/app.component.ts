import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  title = 'CV Mihail Yankovskyi Web Developer';
  isDarkTheme: boolean = false;
  activeIndex = 0;

  onChangeTheme(value: boolean) {
    this.isDarkTheme = value;
  }

  onToggleDrawer(index: number): void {
    console.log(index);
    this.activeIndex = index;
    this.tabGroup.selectedIndex = index;
    this.drawer.open();


    // if (content === 'contacts') {
    //   this.tabGroup.selectedIndex = 0;
    //   this.toShowContentTechnologies = false;
    //   this.toShowContentContacts = true;
    // } else if (content === 'technologies') {
    //   this.tabGroup.selectedIndex = 1;
    //   this.toShowContentTechnologies = true;
    //   this.toShowContentContacts = false;
    // }

    // // this.cdr.detectChanges();

    // if(!this.drawer.opened){
    //   this.drawer.open();
    // }
  }
}
