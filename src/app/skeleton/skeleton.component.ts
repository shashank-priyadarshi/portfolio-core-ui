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
    this.sharedService.fetchData('biodata').subscribe(async (data) => {
      await data;
      this.fetchBody(data);
    });
  }

  fetchBody(biodata: any) {
    let dataObj = biodata[0];

    // Setting keys for tables
    let keys = dataObj[4].Value[3].Value;

    let temp_key = keys[0].Value[0];
    this.skillGridKeys = temp_key[0].Value;

    temp_key = keys[1].Value[0];
    this.college_keys = temp_key[0].Value;
    temp_key = keys[1].Value[1];

    this.secondary_keys = temp_key[0].Value;
    temp_key = keys[2].Value[0];
    this.employment_keys = temp_key.Value;
    this.project_keys = keys[3].Value;

    // Setting values
    let body = dataObj[3].Value;
    this.summary = body[0].Value;

    this.career_objective = body[1].Value;
    this.skills = body[2].Value[0].Value;
    this.college = body[3].Value[0].Value;
    this.secondary = body[3].Value[1].Value;
    this.current_employer = body[4].Value[0].Value;
    this.projects = body[5].Value;
  }
}
