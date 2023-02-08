import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(user: string) {
    return this.http.get(`https://api.github.com/users/${user}`);
  }

  getUserRepos(user: string) {
    return this.http.get(`https://api.github.com/users/${user}/repos`);
  }
}
