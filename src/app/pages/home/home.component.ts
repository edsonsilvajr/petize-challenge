import { Component } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ToastrMessageService } from './../../services/toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private _gitService: GithubService,
    private _toastrMessage: ToastrMessageService
  ) {}
  public searchTerm: string = '';

  public search() {
    this._gitService.getUser(this.searchTerm).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: ({ error }) => {
        this._toastrMessage.showMessage('error', error.message || 'oi', 'Erro');
      },
    });
  }
}
