import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { TallerComponent } from './pages/taller/taller.component';

export const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'taller', component: TallerComponent },
];
