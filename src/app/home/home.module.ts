import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { NoteTabsComponent } from './note-tabs/note-tabs.component';

@NgModule({
  declarations: [HomeComponent, LeftmenuComponent, NoteTabsComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
