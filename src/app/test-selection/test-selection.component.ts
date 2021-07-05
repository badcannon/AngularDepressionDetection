import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHashtag, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-selection',
  templateUrl: './test-selection.component.html',
  styleUrls: ['./test-selection.component.css']
})
export class TestSelectionComponent implements OnInit {

  constructor(private route:Router,private activeRoute:ActivatedRoute) { }
  selectedTest = "audio";

  ngOnInit(): void {
  }
  faVolumeUp = faVolumeUp;
  faHashtag = faHashtag;

  chooseTest(test:string){
    this.selectedTest = test;

    }
}
