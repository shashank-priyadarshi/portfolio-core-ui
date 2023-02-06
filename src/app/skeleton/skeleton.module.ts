import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { SkeletonRoutingModule } from './skeleton-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  imports: [CommonModule, MaterialModule, SkeletonRoutingModule],
  exports: [HeaderComponent, FooterComponent, MenuComponent],
})
export class SkeletonModule {}
