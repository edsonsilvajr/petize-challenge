import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DataService } from 'src/app/services/data.service';
import { GithubService } from 'src/app/services/github.service';
import { ToastrMessageService } from 'src/app/services/toastr.service';
import { TestBed } from '@angular/core/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let gitService: GithubService;
  let toastrMessage: ToastrMessageService;
  let router: Router;
  let userData: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GithubService, ToastrMessageService, Router, DataService],
      declarations: [HomeComponent],
    });
  });
});
