import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaltwoComponent } from './goaltwo.component';

describe('GoaltwoComponent', () => {
  let component: GoaltwoComponent;
  let fixture: ComponentFixture<GoaltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaltwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
