import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { SectionComponent } from './section/section.component';
import { SectionsComponent } from './sections/sections.component';
import { SkillComponent } from './skill/skill.component';
import { MatCardModule }  from '@angular/material/card';
import { MatListModule }  from '@angular/material/list';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { SummaryComponent } from './summary/summary.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    SectionsComponent,
    SkillComponent,
    SummaryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
