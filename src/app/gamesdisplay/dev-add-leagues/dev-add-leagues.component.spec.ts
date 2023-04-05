import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAddLeaguesComponent } from './dev-add-leagues.component';

describe('DevAddLeaguesComponent', () => {
  let component: DevAddLeaguesComponent;
  let fixture: ComponentFixture<DevAddLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevAddLeaguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevAddLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
