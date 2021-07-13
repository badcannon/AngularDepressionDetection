import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-twitter',
  templateUrl: './test-twitter.component.html',
  styleUrls: ['./test-twitter.component.css']
})
export class TestTwitterComponent implements OnInit {

  constructor(private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onDetails()
  {
    this.route.navigate(['twitter','details'],{relativeTo:this.activeRoute});
  }
}
