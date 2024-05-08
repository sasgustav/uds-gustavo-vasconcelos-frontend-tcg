import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataLoading: boolean = false;
  mostrarMenu: boolean = true;
  title = 'pokemon-tcg-game-gustav-vasconcelos';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.mostrarMenu = !event.urlAfterRedirects.includes('/entrada');
    });
  }

  loadData() {
    this.dataLoading = true;
    setTimeout(() => {
      this.dataLoading = false;
    }, 3000);
  }
}
