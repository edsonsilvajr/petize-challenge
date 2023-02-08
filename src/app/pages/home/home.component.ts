import { Component } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ToastrMessageService } from './../../services/toastr.service';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private _gitService: GithubService,
    private _toastrMessage: ToastrMessageService,
    private _router: Router,
    private _userData: DataService
  ) {}
  public searchTerm: string = '';

  public search() {
    this._gitService.getUser(this.searchTerm).subscribe({
      next: (result) => {
        console.log(result);
        this._userData.setData(result);
        this._router.navigate(['/perfil']);
      },
      error: ({ error }) => {
        this._toastrMessage.showMessage('error', error.message, 'Erro');
      },
    });
  }
}
