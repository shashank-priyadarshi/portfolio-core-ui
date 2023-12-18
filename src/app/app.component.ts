import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatToolbarModule, MatTabsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  @Output() selectedTabChange!: EventEmitter<MatTabChangeEvent>;

  title = 'ssnk.in';

  tabItems = [{
      label: 'Home',
    }, {
      label: 'Books',
    }, {
      label: 'Resume',
    }, {
      label: 'Contact',
    }];

    constructor(private router: Router){}

    navigateTo(event: MatTabChangeEvent){
      this.router.navigate(["/"+event.tab.textLabel.toLowerCase()]);
    }
}