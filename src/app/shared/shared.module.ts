import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PopoverDirective } from './popover.directive';

@NgModule({
  declarations: [
    PopoverDirective,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    PopoverDirective,
  ],
})
export class SharedModule {}
