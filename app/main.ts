import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { ContainerComponent } from './components/container.component';

bootstrap(ContainerComponent, [HTTP_PROVIDERS]);
