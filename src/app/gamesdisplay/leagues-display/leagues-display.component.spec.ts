import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesDisplayComponent } from './leagues-display.component';

describe('LeaguesDisplayComponent', () => {
  let component: LeaguesDisplayComponent;
  let fixture: ComponentFixture<LeaguesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
