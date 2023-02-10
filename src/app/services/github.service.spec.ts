import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to retrieve a user', () => {
    const user = 'test-user';
    service.getUser(user).subscribe();
    const req = httpMock.expectOne(`https://api.github.com/users/${user}`);
    expect(req.request.method).toBe('GET');
  });

  it("should make a GET request to retrieve a user's repos", () => {
    const user = 'test-user';
    service.getUserRepos(user).subscribe();
    const req = httpMock.expectOne(
      `https://api.github.com/users/${user}/repos`
    );
    expect(req.request.method).toBe('GET');
  });

  it('should return 404', () => {
    const user = '(*#@(!&$!&$*#*@#*!(@*($(*@!$(#&$&&$&$&$))))))';
    service.getUser(user).subscribe({
      next: () => {},
      error: (error) => {
        expect(error.status).toBe(404);
      },
    });
    const req = httpMock.expectOne(`https://api.github.com/users/${user}`);
    req.flush({ status: 404 }, { status: 404, statusText: 'Not Found' });
  });
});
