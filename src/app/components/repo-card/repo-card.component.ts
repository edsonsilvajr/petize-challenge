import { Component, Input } from '@angular/core';
import { UserRepo } from './../../models/userRepo.model';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
})
export class RepoCardComponent {
  @Input() repo: UserRepo | null = null;
  public timeDiff = '';

  ngOnChanges() {
    if (this.repo === null) return;
    const date = new Date(this.repo.updated_at);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    this.timeDiff = diff > 1 ? 'há ' + diff + ' dia(s)' : 'recentemente';
  }
}
