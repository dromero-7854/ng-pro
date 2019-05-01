import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScoringComponent } from './new-scoring.component';

describe('NewScoringComponent', () => {
  let component: NewScoringComponent;
  let fixture: ComponentFixture<NewScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
