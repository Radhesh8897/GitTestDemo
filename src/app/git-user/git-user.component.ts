import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.css']
})
export class GitUserComponent implements OnInit {
  
  //variable declaration
  userResponse: any;
  show: boolean = false;
  reposit: any;
  orgURL: any;
  namefilters: any;

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  //api call for git user list
  fetchUser() {
    this.Http.get('https://api.github.com/users').subscribe(
      result => {
        this.userResponse = result;
        console.log("UserList:", this.userResponse)
      },
      Error => {
        console.log(Error);
      }
    )
  }

  //modal popup fun
  showModal(idno) {
    this.show = !this.show;
    console.log("hello", idno);
    for (let index = 0; index < this.userResponse.length; index++) {
      if (idno == this.userResponse[index].id) {
        this.reposit = this.userResponse[index].repos_url;
        this.orgURL = this.userResponse[index].organizations_url;
        console.log("url", this.reposit)
      }
    }
  }

  //close popup button fun
  closeModal() {
    this.show = !this.show;
  }


}
