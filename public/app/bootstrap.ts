// Bootstrap the application module
/* The following code snippet is using the browser platform
module to bootstrap the application module for browsers.
Once we have these configured, it's time to learn how to load
our bootstrap code using the SystemJS moduler loader */
import { platformBrowserDynamic } from
    '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);