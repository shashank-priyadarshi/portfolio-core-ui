import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { ApiNotWorkingComponent } from './api-not-working/api-not-working.component';

@NgModule({
  declarations: [
    UnderConstructionComponent,
    PageNotExistComponent,
    ApiNotWorkingComponent,
  ],
  imports: [CommonModule],
  exports: [UnderConstructionComponent, PageNotExistComponent],
})
export class SharedModule {}
