import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @ViewChild('input') inputElement: ElementRef | undefined;
  @Output() enterKeyEvent = new EventEmitter<boolean>();

  @Input() public value = '';

  ngOnInit() {
    this.value = this.inputElement?.nativeElement.value;
  }

  keyupListener(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    this.enterKeyEvent.next(true);
  }
}
