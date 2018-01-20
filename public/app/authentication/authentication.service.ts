// CREATING THE AUTHENTICATION SERVICE
/* In order to support our new components, we would need to create an 
authentication service to provide them with the needed functionality.
*/
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/* Note how we decorated the AuthenticationService class with an @Injectable
decorator. While that's not needed in this case, it is a good practice to decorate
your services that way. The reason is that if you'd like to inject a service with 
another service, you'll need to use this decorator, so for the sake of uniformity,
it is better to stay safe and decorate all your services. Another thing to note
is the way we get our user object from the window object.

We also added three methods to our service: one that handles sigin, another that
handles signup, and a last one for error handling. Inside our methods, we use the
HTTP module provided by Angular to call our server endpoints. We just send POST
a request to our server.
*/
@Injectable()
export class AuthenticationService {
    public user = window['user'];

    private _signinURL = 'api/auth/signin';
    private _signupURL = 'api/auth/signup';

    constructor (private http: Http) {

    }
    isLoggedIn(): boolean {
        return (!!this.user);
    }

    signin(credentials: any): Observable<any> {
        let body = JSON.stringify(credentials);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._signinURL, body, options).map(res => this.user = res.json()).catch(this.handleError)
    }

    signup(user: any): Observable<any> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._signupURL, body, options).map(res => this.user = res.json()).catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().message || 'Server Error');
    }
}