import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from '../app/pages/perfil/perfil.component';
import { DataService } from './../app/services/data.service';
import { GithubService } from './../app/services/github.service';
import { Router } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { InputComponent } from 'src/app/components/UI/input/input.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { of } from 'rxjs';
import { RepoCardComponent } from 'src/app/components/repo-card/repo-card.component';
import { UserCardInfoComponent } from 'src/app/components/user-card-info/user-card-info.component';
import { UserRepo } from 'src/app/models/userRepo.model';
import { ToastrModule } from 'ngx-toastr';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let gitService: GithubService;
  let router: Router;
  let userData: DataService;
  let httpMock: HttpTestingController;
  let inputEl: InputComponent;

  const routes = [{ path: '', component: HomeComponent }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ToastrModule.forRoot(),
      ],
      declarations: [
        PerfilComponent,
        InputComponent,
        UserCardInfoComponent,
        RepoCardComponent,
      ],
      providers: [DataService, GithubService, Router, InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    gitService = TestBed.inject(GithubService);
    router = TestBed.inject(Router);
    userData = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
    inputEl = TestBed.inject(InputComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home if no user data is available', () => {
    spyOn(userData, 'getData').and.returnValue(null);
    spyOn(gitService, 'getUserRepos');
    spyOn(router, 'navigate');
    fixture.detectChanges();
    expect(userData.getData).toHaveBeenCalled();
    expect(gitService.getUserRepos).not.toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should call getUserRepos', () => {
    spyOn(userData, 'getData').and.returnValue({
      login: 'edsonsilvajr',
    } as User);
    spyOn(gitService, 'getUserRepos').and.returnValue(of([]));
    spyOn(router, 'navigate');
    fixture.detectChanges();
    expect(userData.getData).toHaveBeenCalled();
    expect(gitService.getUserRepos).toHaveBeenCalledWith('edsonsilvajr');
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should sort the user repos by stargazers_count', () => {
    spyOn(userData, 'getData').and.returnValue({
      login: 'edsonsilvajr',
    } as User);
    spyOn(gitService, 'getUserRepos').and.returnValue(
      of([
        { stargazers_count: '10' },
        { stargazers_count: '5' },
        { stargazers_count: '20' },
      ] as UserRepo[])
    );
    fixture.detectChanges();
    expect(userData.getData).toHaveBeenCalled();
    expect(gitService.getUserRepos).toHaveBeenCalledWith('edsonsilvajr');
    expect(component.userRepos).toEqual([
      { stargazers_count: '20' },
      { stargazers_count: '10' },
      { stargazers_count: '5' },
    ] as UserRepo[]);
  });
});
