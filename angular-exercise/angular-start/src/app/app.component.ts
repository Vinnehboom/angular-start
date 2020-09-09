import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  languages: any[] = ['Javascript', 'PHP', 'Symfony', 'Angular', 'Bootstrap', 'Python'];
  title = `angular-start`;
  friendModel = new Friend('', '', '', '', '');
  allFriends: any = [];
  constructor(private addFriendService: AddFriendService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getFriends('http://localhost:9090/allfriends')
  }

 submitForm = (): void => {
this.addFriendService.addFriend(this.friendModel).subscribe((data: Friend) =>
   {
     this.getFriends('http://localhost:9090/allFriends');
   });
 }


  async getFriends(url: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return await this.http.get(url, httpOptions).toPromise()
      .then(data => {
        this.allFriends = data;
      })
  }
}
