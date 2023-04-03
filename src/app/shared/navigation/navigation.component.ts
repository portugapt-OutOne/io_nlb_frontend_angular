import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavigationBar } from './navigationModel'
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  navObjects: Array<NavigationBar> = []

}
