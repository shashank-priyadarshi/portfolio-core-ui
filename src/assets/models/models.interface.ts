export interface Common {
  title: string;
  url: string;
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
export interface WeekData {
  Key: string;
  Value: string;
}
export interface Token {
  token: string;
}

export interface Game{
  gamedetails: string;
  pgn: string;
  result: string;
  gameurl: string;
}
