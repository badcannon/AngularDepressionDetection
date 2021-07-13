import { Component, OnInit } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-audio-details',
  templateUrl: './test-audio-details.component.html',
  styleUrls: ['./test-audio-details.component.css']
})
export class TestAudioDetailsComponent implements OnInit {

  constructor() { }
  faFileUpload = faFileUpload;
  ngOnInit(): void {
  }

}
