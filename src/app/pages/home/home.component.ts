import { Component, ViewChild } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { ToastrMessageService } from './../../services/toastr.service';
import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { InputComponent } from './../../components/UI/input/input.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(InputComponent, { static: false })
  searchTerm: InputComponent | null = null;

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
}
