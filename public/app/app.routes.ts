// Configure the application routes
// Redirect any unknown routing requests to our home component.
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [{
    path: '**',
    redirectTo: '/',
}];