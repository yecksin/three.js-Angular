import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CameraComponent } from './pages/camera/camera.component';
import { CharacterComponent } from './pages/character/character.component';
import { HouseComponent } from './pages/house/house.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'house', component: HouseComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
