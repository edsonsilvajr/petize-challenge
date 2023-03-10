import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../../services/data.service';
import { GithubService } from './../../services/github.service';
import { UserRepo } from './../../models/userRepo.model';
import { InputComponent } from 'src/app/components/UI/input/input.component';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { ToastrMessageService } from './../../services/toastr.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  @ViewChild('input', { static: false })
  searchTerm: InputComponent = new InputComponent();

  private _userData: User | null = null;
  private _userRepos: UserRepo[] = [];

  constructor(
    private _dataService: DataService,
    private _gitService: GithubService,
    private _router: Router,
    private _toastrMessage: ToastrMessageService
  ) {}

  ngOnInit() {
    this._userData = this._dataService.getData();
    this.repoSearch();
  }

  public repoSearch() {
    if (!this._userData) {
      this._router.navigate(['/']);
    } else {
      this._gitService.getUserRepos(this._userData.login).subscribe({
        next: (repos: Object) => {
          this._userRepos = repos as UserRepo[];
          if (this._userRepos.length > 1) {
            this._userRepos = Array.from(this._userRepos as UserRepo[]).sort(
              (a, b) => +b.stargazers_count - +a.stargazers_count
            );
          }
        },
        error: () => {},
      });
    }
  }

  public search() {
    if (typeof this.searchTerm?.value === 'string') {
      this._gitService.getUser(this.searchTerm.value).subscribe({
        next: (result) => {
          this._dataService.setData(result as User);
          this._userData = result as User;
          this.repoSearch();
        },
        error: ({ error }) => {
          this._toastrMessage.showMessage('error', error.message, 'Erro');
        },
      });
    }
  }

  get userData() {
    return this._userData;
  }

  get userRepos() {
    return this._userRepos;
  }
}
