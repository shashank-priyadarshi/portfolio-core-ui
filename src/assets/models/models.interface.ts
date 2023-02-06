export interface Common {
  title: string;
  url: string;
}

export interface Biodata {
  name: string;
  role: string;
  position: string;
  doj: string;
  github: string;
  linkedin: string;
}

export interface SCMData {
  starredRepoCount: number;
  openIssueCount: number;
  list: Common[];
  scmActivity: SCMActivity[];
}

export interface SCMActivity {
  loc: number;
  pr: number;
  commits: number;
  date: any;
}