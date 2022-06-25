import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmatchComponent } from './formmatch.component';

describe('FormmatchComponent', () => {
  let component: FormmatchComponent;
  let fixture: ComponentFixture<FormmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
