import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.sass'],
})
export class SkeletonComponent implements OnInit {
  career_objective!: string;
  skillGridKeys!: string[];
  skills!: string[];
  summary: any;
  college: any;
  college_keys: any;
  current_employer: any;
  employment_keys: any;
  project_keys: any;
  projects: any;
  secondary: any;
  secondary_keys: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.fetchBody();
  }

  fetchBody() {
    this.sharedService.getData().subscribe((data) => {
      this.summary = data.body.summary;
      this.career_objective = data.body.career_objective;
      this.skills = data.body.skillsets.technical_skill_grid;
      this.skillGridKeys = data.keys.body.skillsets[0].technical_skill_grid;
      this.college_keys = data.keys.body.education[0].college;
      this.college = data.body.education.college;
      this.current_employer = data.body.employment_profile.current_employer;
      this.employment_keys = data.keys.body.employment_profile.employer;
      this.project_keys = data.keys.body.projects;
      this.projects = data.body.projects;
      this.secondary = data.body.education.secondary;
      this.secondary_keys = data.keys.body.education[1].secondary;
    });
  }
}
