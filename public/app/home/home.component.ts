// CREATING THE HOME COMPONENT
/* This is just a simple component, which has the authentication 
service injected and which is used to provide the component with
the user object.
*/
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.template.html'
})
export class HomeComponent {
    user: any;

    constructor (private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }
}