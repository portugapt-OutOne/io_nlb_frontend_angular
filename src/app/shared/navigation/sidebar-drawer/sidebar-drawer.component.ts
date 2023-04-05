import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar-drawer',
  templateUrl: './sidebar-drawer.component.html',
  styleUrls: ['./sidebar-drawer.component.css']
})
export class SidebarDrawerComponent {


  elementVisible = false;

  constructor(private el: ElementRef) {}

  toggleElement(): void {
    this.elementVisible = !this.elementVisible;
  }

  hideElement(): void {
    this.elementVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.hideElement();
    }
  }
}
