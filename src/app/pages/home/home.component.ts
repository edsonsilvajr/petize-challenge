import { Component, ViewChild } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ToastrMessageService } from './../../services/toastr.service';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { InputComponent } from './../../components/UI/input/input.component';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('input', { static: false })
  searchTerm: InputComponent = new InputComponent();

  constructor(
    private _gitService: GithubService,
    private _toastrMessage: ToastrMessageService,
    private _router: Router,
    private _userData: DataService
  ) {}

  public search() {
    if (typeof this.searchTerm?.value === 'string') {
      this._gitService.getUser(this.searchTerm.value).subscribe({
        next: (result) => {
          this._userData.setData(result as User);
          this._router.navigate(['/perfil']);
        },
        error: ({ error }) => {
          this._toastrMessage.showMessage('error', error.message, 'Erro');
        },
      });
    }
  }
}
