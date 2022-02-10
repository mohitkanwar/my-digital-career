import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';



@NgModule({
  declarations: [StandardLayoutComponent, TopBarComponent, NavDrawerComponent],
  exports: [StandardLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
