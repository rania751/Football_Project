import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstableComponent } from './playerstable.component';

describe('PlayerstableComponent', () => {
  let component: PlayerstableComponent;
  let fixture: ComponentFixture<PlayerstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
