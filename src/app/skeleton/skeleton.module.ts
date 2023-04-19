import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { SkeletonRoutingModule } from './skeleton-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MaterialModule, SkeletonRoutingModule],
  exports: [MenuComponent],
})
export class SkeletonModule { }
