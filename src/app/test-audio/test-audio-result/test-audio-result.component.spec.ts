import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAudioResultComponent } from './test-audio-result.component';

describe('TestAudioResultComponent', () => {
  let component: TestAudioResultComponent;
  let fixture: ComponentFixture<TestAudioResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAudioResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAudioResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
