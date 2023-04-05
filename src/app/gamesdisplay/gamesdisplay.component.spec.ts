import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesdisplayComponent } from './gamesdisplay.component';

describe('GamesdisplayComponent', () => {
  let component: GamesdisplayComponent;
  let fixture: ComponentFixture<GamesdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
