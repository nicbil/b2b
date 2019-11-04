import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
          <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
          <button mat-menu-item [routerLink]="['/movie/']">
              <mat-icon>dialpad</mat-icon>
              <span>Movie</span>
          </button>
          <button mat-menu-item [routerLink]="['/movies/']">
              <mat-icon>voicemail</mat-icon>
              <span>Added movies</span>
          </button>
      </mat-menu>
  `
})
export class MenuComponent {
}
