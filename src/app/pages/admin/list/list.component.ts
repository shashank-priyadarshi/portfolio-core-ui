import { Component, Input } from '@angular/core';
import { PagesService } from '../../home/pages.service';
import { Common } from 'src/assets/models/models.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CustomError } from 'src/assets/models/custom-error.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent extends PagesService {
  @Input() dataField!: string;
  @Input() isRepoList!: boolean;

  list!: Common[];
  message: string = 'Action not enabled!';
  action: string = 'Dismiss';
  snackBar!: boolean;
  dataLoaded: boolean = false;
  dataCount!: number;

  constructor(private matSnackBar: MatSnackBar, private httpclient: HttpClient) {
    super(httpclient);
  }

  ngOnInit() {
    let dataString: string = localStorage.getItem(this.dataField) as string;
    if (dataString && dataString.length > 2) {
      this.list = JSON.parse(dataString) as Common[];
      this.dataLoaded = true;
      return;
    } else {
      this.fetchDataList();
      this.dataLoaded = true;
      // window.open(
      //   'https://github.com/shashank-priyadarshi/MyFiles/blob/main/server_crash.jpg?raw=true',
      //   '_self'
      // );
      return;
    }
  }

  fetchDataList() {
    this.postData(this.dataField, '').subscribe((data) => {
      if (data instanceof CustomError) {
        this.matSnackBar.open("Error fetching data for "+this.dataField+" : \n\n"+data.message, this.action, {
          duration: 3000
        });
        return;
      }
      let value;
      let dataList: Common[] = [];
      if (this.isRepoList) {
        value = this.parseRepoList(data.starredrepos);
      } else {
        value = this.parseTodoList(data);
      }
      dataList = value.dataList;
      this.dataCount = value.count;
      localStorage.setItem(this.dataField, JSON.stringify(dataList));
    });
  }

  parseTodoList(data: any): { dataList: Common[], count: number } {
    let count: number = 0;
    let dataList: Common[] = [];
    data.issues.forEach((element: string) => {
      let lastIndex: number = element.lastIndexOf(',');
      count++;
      dataList.push({
        title: element.slice(0, lastIndex),
        url: element.slice(lastIndex + 1),
      });
    });
    return { dataList: dataList, count: count };
  }

  parseRepoList(data: any): { dataList: Common[], count: number } {
    let dataList: Common[] = [];
    let count = data[0].Value;
    data[1].Value.forEach((element: string) => {
      let lastIndex: number = element.lastIndexOf(',');
      dataList.push({
        title: element.slice(0, lastIndex),
        url: element.slice(lastIndex + 1),
      });
    });
    return { dataList: dataList, count: count };
  }

  initSnackBar(event: any) {
    if (!this.isRepoList) {
      this.matSnackBar.open(this.message, this.action, {
        duration: 3000,
      });
      event.target.checked = !event.target.checked;
      event.preventDefault();
    }
  }
}
