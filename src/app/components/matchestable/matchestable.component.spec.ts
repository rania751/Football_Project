import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchestableComponent } from './matchestable.component';

describe('MatchestableComponent', () => {
  let component: MatchestableComponent;
  let fixture: ComponentFixture<MatchestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
