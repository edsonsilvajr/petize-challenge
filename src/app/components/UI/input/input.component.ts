import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @ViewChild('input') inputElement: ElementRef | undefined;

  @Input() public value = '';

  ngOnInit() {
    this.value = this.inputElement?.nativeElement.value;
  }
}
