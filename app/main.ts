import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';


bootstrap(AppComponent, [ROUTER_PROVIDERS]);
