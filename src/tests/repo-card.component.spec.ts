import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRepo } from 'src/app/models/userRepo.model';

import { RepoCardComponent } from '../app/components/repo-card/repo-card.component';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the timeDiff property to "recentemente" when the updated_at date is recent', () => {
    component.repo = {
      updated_at: new Date().toISOString(),
    } as UserRepo;
    component.ngOnChanges();
    expect(component.timeDiff).toEqual('recentemente');
  });

  it('should set the timeDiff property to "há X dia(s)" when the updated_at date is X days ago', () => {
    const daysAgo = 10;
    component.repo = {
      updated_at: new Date(
        Date.now() - daysAgo * 24 * 60 * 60 * 1000
      ).toISOString(),
    } as UserRepo;
    component.ngOnChanges();
    expect(component.timeDiff).toEqual(`há ${daysAgo} dia(s)`);
  });
});
