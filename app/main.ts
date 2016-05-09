import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ContainerComponent } from './components/container.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';


bootstrap(ContainerComponent, [ROUTER_PROVIDERS]);
