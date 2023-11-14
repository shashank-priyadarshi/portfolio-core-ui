import {Component, OnInit} from '@angular/core';

class Experience {
  company: string;
  roles: Role[];

  constructor(company: string, roles: Role[]) {
    this.company = company;
    this.roles = roles;
  }
}

class Role {
  title: string;
  duration: string;
  tasks: string[];

  constructor(title: string, duration: string, tasks: string[]) {
    this.title = title;
    this.duration = duration;
    this.tasks = tasks;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit{
  experiences: Experience[] = [
    new Experience(
      'National Payments Corporation of India',
      [
        new Role('Associate Golang Developer', 'May 2, 2023 - Present', ['Using Hyperledger Fabric and Go to develop Blockchain networks'])
      ]),
    new Experience(
      'Infosys Ltd',
      [
        new Role(
          'Systems Engineer',
          'Dec 19, 2021 - Apr 17, 2023',
          [
            'Consuming REST APIs from SCM/ALM/Code Quality tools in Go plugins',
            'Parsing and pushing data to internal microservices, using GraphQL endpoints',
            'Using more GraphQL in Angular web application to fetch data from internal microservices',
            'Using charting libraries, internal NPM packages and Angular Material for data visualisation in Angular web application',
            'Offloading core web application by creating Angular Micro Frontends',
            'Testing Angular application using Jasmine, Go plugins using the "testing" package',
            'Ensuring code quality with semantic analysis, security analysis, SAST & DAST, using tools like SonarQube, Fortify SAST, Synopsys BlackDuck, GHAS, CodeQL, etc.',
            'Setting up pipelines on the Infosys DevSecOps Platform to automate plugin trigger and application deployment',
            'Using Linux VMs, Docker, k8s and Rancher to set up Integration and DAST environment setups for the whole application, including database services, microservices and persistent storage'
          ]
        ),
        new Role(
          'Systems Engineer Trainee',
          'Sep 27, 2021 - Dec 18, 2021',
          [
            'Basics of web development using Angular, NodeJS, MongoDB and Express',
            'Developing a full stack flight ticket booking application using MEAN stack'
          ]
        ),
      ]
    ),
    new Experience(
      'Portfolio',
      [
        new Role(
          'Software Developer',
          'Dec 19, 2021 - Apr 17, 2023',
          [
            'Using Go, MongoDB, Redis and MySQL to implement backend',
            'Implementing Basic and JWT token based authentication methods, location based authorization',
            'Using Go SMTP server and Google Calendar APIs to automate call scheduling',
            'Using Go and MongoDB to implement GitHub and Chess.com integrations',
            'Using Angular, Angular Material, ngx-charts and ngx-chess-board to develop UI',
            'Using bash scripting to containerize frontend and backend applications for development environment, and to enable one click development/production environment setup',
            'Using Docker and Docker Compose, and DigitalOcean droplets to containerize portfolio frontend and backend services, and nginx reverse proxy to deploy UI on Linux based container'
          ]
        ),
      ]
    ),
    new Experience(
      'Ecommerce website clone',
      [
        new Role(
          'Software Developer',
          'Started Jan 18, 2023',
          [
            'Using Angular to clone Amazon landing page',
            'Developing backend services and microservices will involve NodeJS, Go and Java SpringBoot and Hibernate.',
            'Co-developer: @Aman Verma',
            'Stay tuned for updates'
          ]
        ),
      ]
      ),
  ];

  isExpanded = false;
  expandedStates: {[key: number]: boolean} = {};
  totalExperienceInYears = '';

  ngOnInit() {
    this.totalExperienceInYears = (this.calculateExperience('2021-09-27') / 31557600000).toFixed(2);
    for (let i = 0; i < this.experiences.length; i++) {
      this.expandedStates[i] = false;
    }
  }

  toggleExperience(index: number) {
    for (const key of Object.keys(this.expandedStates)) {
      const numericKey = Number(key);
      if (numericKey === index) {
        this.expandedStates[numericKey] = !this.expandedStates[numericKey];
      } else {
        this.expandedStates[numericKey] = false;
      }
    }
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }

  calculateExperience(doj: string) {
    return new Date().getTime() - new Date(doj).getTime();
  }
}
