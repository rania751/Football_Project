import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstableComponent } from './teamstable.component';

describe('TeamstableComponent', () => {
  let component: TeamstableComponent;
  let fixture: ComponentFixture<TeamstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
