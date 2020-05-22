
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  register;
  constructor(
    private formBuild: FormBuilder,
    private http: HttpClient
  ) {
    this.register = this.formBuild.group({
      username: '',
      password: '',
      location: '',
      company: ''
    })
  }

  onSubmit(values) {
    console.log(values);
    const {
      username,
      password,
      location,
      company
    } = values;

    const request_body = {
      payload: {
        username,
        password,
        location,
        company
      }
    };

     let url = 'http://localhost:3000/create_user';
     this.http.post(url, request_body).toPromise().then((response)=>{
       console.log(response);
    })
  }

}
