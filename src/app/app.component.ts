import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MatToolbarModule, MatTabsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'ssnk.in';

  tabItems = [{
      label: 'Home',
      route: '',
    }, {
      label: 'Books',
      route: 'books',
    }, {
      label: 'Resume',
      route: 'resume',
    }, {
      label: 'Contact',
      route: 'contact',
    }];
}