import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
PORT = 9090;
url = 'http://localhost:' + this.PORT + '/addfriend';

  constructor(private http: HttpClient) {
  }

 public addFriend = (friend: Friend): Observable<any> => {
    return this.http.post(this.url, friend);

  }
}
