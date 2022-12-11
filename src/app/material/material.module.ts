import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

let MATERIAL_MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule {}
