import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { FlagsPageComponent } from './pages/flags-page/flags-page.component';
import { CharactersDetailsComponent } from './pages/characters-page/characters-details/characters-details.component';
import { FlagsDetailsComponent } from './pages/flags-page/flags-details/flags-details.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'characters/:nameCharacter', component: CharactersDetailsComponent},
  {path: 'flags', component: FlagsPageComponent},
  {path: 'flags/:nameFlag', component: FlagsDetailsComponent},
  {path: 'chronology', component: ChronologyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
