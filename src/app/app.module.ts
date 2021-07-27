import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { FlagsPageComponent } from './pages/flags-page/flags-page.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CharactersDetailsComponent } from './pages/characters-page/characters-details/characters-details.component';
import { FlagsDetailsComponent } from './pages/flags-page/flags-details/flags-details.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FlagsComponent } from './shared/components/flags/flags.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SearchbarComponent } from './shared/components/searchbar/searchbar.component';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChronologyPageComponent,
    CharactersPageComponent,
    FlagsPageComponent,
    FooterComponent,
    HeaderComponent,
    CharactersDetailsComponent,
    GalleryComponent,
    FlagsDetailsComponent,
    FlagsComponent,
    SearchbarComponent,
    BackBtnComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimplebarAngularModule,
    FormsModule,
    ReactiveFormsModule,
    TimelineModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
