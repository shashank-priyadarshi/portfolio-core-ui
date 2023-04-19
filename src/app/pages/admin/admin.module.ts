import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ActionsComponent } from './actions/actions.component';
import { ChartsComponent } from './charts/charts.component';
import { CodeqlComponent } from './codeql/codeql.component';
import { TimeComponent } from './time/time.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent, ListComponent, ActionsComponent, ChartsComponent, CodeqlComponent, TimeComponent, GamesComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
