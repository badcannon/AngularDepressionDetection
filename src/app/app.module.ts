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
import { TestResultsComponent } from './test-results/test-results.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { DocumentationComponent } from './documentation/documentation.component';
import { TestTwitterDetailsComponent } from './test-twitter/test-twitter-details/test-twitter-details.component';
import { TestAudioDetailsComponent } from './test-audio/test-audio-details/test-audio-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import * as fromApp from './store/app.reducer';

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
    TestResultsComponent,
    CapitalizePipe,
    DocumentationComponent,
    TestTwitterDetailsComponent,
    TestAudioDetailsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgParticlesModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
