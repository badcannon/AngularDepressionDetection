import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgParticlesModule } from 'ng-particles';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestSelectionComponent } from './test-selection/test-selection.component';
import { TestAudioComponent } from './test-audio/test-audio.component';
import { TestTwitterComponent } from './test-twitter/test-twitter.component';
 import { TestAudioResultComponent } from './test-audio/test-audio-result/test-audio-result.component';
import { TestTwitterResultComponent } from './test-twitter/test-twitter-result/test-twitter-result.component';
import { TestResultsComponent } from './test-results/test-results.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { DocumentationComponent } from './documentation/documentation.component';
import { TestTwitterDetailsComponent } from './test-twitter/test-twitter-details/test-twitter-details.component';
import { TestAudioDetailsComponent } from './test-audio/test-audio-details/test-audio-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    TestSelectionComponent,
    TestAudioComponent,
    TestTwitterComponent,
     TestAudioResultComponent,
    TestTwitterResultComponent,
    TestResultsComponent,
    CapitalizePipe,
    DocumentationComponent,
    TestTwitterDetailsComponent,
    TestAudioDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
