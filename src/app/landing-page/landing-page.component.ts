import { Component, OnInit } from '@angular/core';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { Container, Main } from 'ng-particles';
import particles from "../../assets/javascript/particles.json";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  id = "tsparticles";
  particlesOptions = particles
  faMeteor = faMeteor;

  ngOnInit(): void {
    console.log( this.particlesOptions);
    }




  particlesLoaded(container: Container): void {
    console.log(container);
}

particlesInit(main: Main): void {
    console.log(main);

 }

}
