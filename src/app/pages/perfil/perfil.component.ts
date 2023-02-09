import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  private _userData: any; //TODO: criar modelo
  private _userRepos: any; //TODO: criar modelo

  constructor(
    private _dataService: DataService,
    private _gitService: GithubService
  ) {}

  ngOnInit() {
    this._userData = this._dataService.getData();
    this._gitService.getUserRepos(this._userData?.login).subscribe({
      next: (repos) => {
        console.log(repos);
        this._userRepos = repos;
      },
      error: () => {},
    });
  }

  get userData() {
    return this._userData;
  }

  get userRepos() {
    return this._userRepos;
  }
}
