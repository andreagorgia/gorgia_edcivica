import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalthreeComponent } from './goalthree.component';

describe('GoalthreeComponent', () => {
  let component: GoalthreeComponent;
  let fixture: ComponentFixture<GoalthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
