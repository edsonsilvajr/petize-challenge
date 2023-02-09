import { Component, Input } from '@angular/core';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user-card-info',
  templateUrl: './user-card-info.component.html',
  styleUrls: ['./user-card-info.component.css'],
})
export class UserCardInfoComponent {
  @Input() data: User | null = null;
}
