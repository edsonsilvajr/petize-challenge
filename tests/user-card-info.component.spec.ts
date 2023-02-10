import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardInfoComponent } from '../src/app/components/user-card-info/user-card-info.component';

describe('UserCardInfoComponent', () => {
  let component: UserCardInfoComponent;
  let fixture: ComponentFixture<UserCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
