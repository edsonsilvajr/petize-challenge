import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card-info',
  templateUrl: './user-card-info.component.html',
  styleUrls: ['./user-card-info.component.css'],
})
export class UserCardInfoComponent {
  @Input() data: any;
}
