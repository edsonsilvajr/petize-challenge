import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { DataService } from 'src/app/services/data.service';
import { GithubService } from 'src/app/services/github.service';
import { ToastrMessageService } from 'src/app/services/toastr.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from 'src/app/components/UI/input/input.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let gitService: GithubService;
  let toastrMessage: ToastrMessageService;
  let router: Router;
  let userData: DataService;
  let fixture: ComponentFixture<HomeComponent>;
  let httpMock: HttpTestingController;
  let inputEl: InputComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), FormsModule],
      declarations: [HomeComponent, InputComponent],
      providers: [
        GithubService,
        Router,
        ToastrMessageService,
        DataService,
        InputComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    gitService = TestBed.inject(GithubService);
    toastrMessage = TestBed.inject(ToastrMessageService);
    router = TestBed.inject(Router);
    userData = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
    inputEl = TestBed.inject(InputComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to profile when username found', () => {
    spyOn(router, 'navigate');
    component.searchTerm = inputEl;
    inputEl.value = 'edsonsilvajr';
    component.search();

    const req = httpMock.expectOne(
      `https://api.github.com/users/${inputEl.value}`
    );
    req.flush({ name: 'edsonsilvajr' }, { status: 200, statusText: 'success' });

    expect(router.navigate).toHaveBeenCalledWith(['/perfil']);
  });

  it('should show error message from toastr if not found', () => {
    spyOn(toastrMessage, 'showMessage').and.callThrough();

    component.searchTerm = inputEl;
    inputEl.value = 'not-found-user';
    component.search();

    const req = httpMock.expectOne(
      `https://api.github.com/users/${inputEl.value}`
    );
    req.flush(
      { message: 'Not Found' },
      { status: 404, statusText: 'Not Found' }
    );

    expect(toastrMessage.showMessage).toHaveBeenCalledWith(
      'error',
      'Not Found',
      'Erro'
    );
  });
});
