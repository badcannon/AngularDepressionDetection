import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwitterComponent } from './test-twitter.component';

describe('TestTwitterComponent', () => {
  let component: TestTwitterComponent;
  let fixture: ComponentFixture<TestTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
