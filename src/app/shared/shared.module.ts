import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { ApiNotWorkingComponent } from './api-not-working/api-not-working.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PopoverDirective } from './popover.directive';

@NgModule({
  declarations: [
    UnderConstructionComponent,
    PageNotExistComponent,
    ApiNotWorkingComponent,
    PopoverDirective,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    UnderConstructionComponent,
    PageNotExistComponent,
    PopoverDirective,
  ],
})
export class SharedModule {}
