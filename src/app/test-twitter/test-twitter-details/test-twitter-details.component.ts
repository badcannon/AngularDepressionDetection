import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-twitter-details',
  templateUrl: './test-twitter-details.component.html',
  styleUrls: ['./test-twitter-details.component.css']
})
export class TestTwitterDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUserAlt = faUserAlt;

  onSubmit(form:NgForm)
  {
     console.log(form);
  }
}
