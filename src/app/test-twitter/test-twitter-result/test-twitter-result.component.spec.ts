import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwitterResultComponent } from './test-twitter-result.component';

describe('TestTwitterResultComponent', () => {
  let component: TestTwitterResultComponent;
  let fixture: ComponentFixture<TestTwitterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTwitterResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwitterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
