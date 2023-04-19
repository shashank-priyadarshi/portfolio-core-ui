import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  linkedIn: string = 'https://linkedin.com/in/aman-kumar-verma';
  githubOrg: string = 'https://github.com/Ecommerce-Clone/Core-UI';
  portfolioRepo: string =
    'https://github.com/shashank-priyadarshi/portfolio-core-ui/';
}
