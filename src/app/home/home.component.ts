import { Component, OnInit } from '@angular/core';
import {   faVials  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  faVials = faVials;

  ngOnInit(): void {
  }

}
