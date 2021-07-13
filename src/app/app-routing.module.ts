import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestAudioDetailsComponent } from './test-audio/test-audio-details/test-audio-details.component';

import { TestResultsComponent } from './test-results/test-results.component';
import { TestTwitterDetailsComponent } from './test-twitter/test-twitter-details/test-twitter-details.component';


const routes: Routes = [
  {path:"",redirectTo:"landing",pathMatch:"full"},
  {path:"landing",component:LandingPageComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[
    {
      path:"results/:test",component:TestResultsComponent
    },
    {path:"audio/details",component:TestAudioDetailsComponent},
    {path:"twitter/details",component:TestTwitterDetailsComponent}
  ]},
  {path:"docs",component:DocumentationComponent},
  {path:"about-us",component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
