import { InputComponent } from 'src/app/components/UI/input/input.component';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [InputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    component = new InputComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('keyupListener', () => {
    it('should emit the event if key is Enter', () => {
      spyOn(component.enterKeyEvent, 'next');
      component.keyupListener({
        key: 'Enter',
      } as KeyboardEvent);
      expect(component.enterKeyEvent.next).toHaveBeenCalledWith(true);
    });

    it('should not emit the event if key is not Enter', () => {
      spyOn(component.enterKeyEvent, 'next');
      component.keyupListener({
        key: 'Other key',
      } as KeyboardEvent);
      expect(component.enterKeyEvent.next).not.toHaveBeenCalled();
    });
  });
});
