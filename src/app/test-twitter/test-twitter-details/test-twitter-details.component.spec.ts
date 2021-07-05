import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwitterDetailsComponent } from './test-twitter-details.component';

describe('TestTwitterDetailsComponent', () => {
  let component: TestTwitterDetailsComponent;
  let fixture: ComponentFixture<TestTwitterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTwitterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwitterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
