import { Component, OnInit } from '@angular/core';
import { faCodeBranch, faFileAlt, faHome, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  faCodeBranch = faCodeBranch;
  faUserTie = faUserTie;
  faFileAlt = faFileAlt;
  faHome = faHome;
  ngOnInit(): void {
  }

}
