import { Component, HostListener, ElementRef, Renderer2, Output  } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor() {}

  smallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.smallScreen = window.innerWidth < 768; // Adjust the value to your desired breakpoint
  }
}
