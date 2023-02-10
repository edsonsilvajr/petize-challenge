import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardInfoComponent } from '../app/components/user-card-info/user-card-info.component';

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

  it('should return false', () => {
    const result = component.checkStringLength('');
    expect(result).toEqual(false);
  });

  it('should return true', () => {
    const result = component.checkStringLength('aaaa');
    expect(result).toEqual(true);
  });
});
