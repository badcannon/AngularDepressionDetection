import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { TestAudioComponent } from './test-audio/test-audio.component';
import { TestResultsComponent } from './test-results/test-results.component';

import { TestTwitterComponent } from './test-twitter/test-twitter.component';

const routes: Routes = [
  {path:"",redirectTo:"landing",pathMatch:"full"},
  {path:"landing",component:LandingPageComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[
    {
      path:"results/:test",component:TestResultsComponent
    },
    {path:"audio/details",component:TestAudioComponent,children:[
     ]},
    {path:"twitter/details",component:TestTwitterComponent,children:[
    ]}
  ]},
  {path:"docs",component:DocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
