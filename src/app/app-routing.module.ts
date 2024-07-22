import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' },
  { path: '**', redirectTo: '/services' }
];
