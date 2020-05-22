import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-my-users',
  templateUrl: './my-users.component.html',
  styleUrls: ['./my-users.component.css']
})
export class MyUsersComponent {
  data: Array<any>
  constructor(
    private http: HttpClient
  ) {
    this.data = new Array<any>();
  }

  get_users(){
    let url = 'http://localhost:3000/users';
    this.http.get(url).toPromise().then((response) => {
      this.data = JSON.parse(JSON.stringify(response)).data;
      console.log(this.data);
    })
  }


}
