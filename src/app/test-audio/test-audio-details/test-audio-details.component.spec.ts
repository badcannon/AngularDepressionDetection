import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAudioDetailsComponent } from './test-audio-details.component';

describe('TestAudioDetailsComponent', () => {
  let component: TestAudioDetailsComponent;
  let fixture: ComponentFixture<TestAudioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAudioDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAudioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
