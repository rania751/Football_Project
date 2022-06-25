import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchinforComponent } from './matchinfor.component';

describe('MatchinforComponent', () => {
  let component: MatchinforComponent;
  let fixture: ComponentFixture<MatchinforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchinforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
