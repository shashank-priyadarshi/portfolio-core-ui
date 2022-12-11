import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

let MATERIAL_MODULES = [MatMenuModule];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule {}
