import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-audio',
  templateUrl: './test-audio.component.html',
  styleUrls: ['./test-audio.component.css']
})
export class TestAudioComponent implements OnInit {

  constructor(private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onDetails()
  {
    this.route.navigate(['audio','details'],{relativeTo:this.activeRoute});
  }
}
