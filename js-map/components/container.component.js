"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var header_component_1 = require('./header.component');
var contact_list_component_1 = require('./contact-list.component');
var contact_form_component_1 = require('./contact-form.component');
var ContainerComponent = (function () {
    function ContainerComponent() {
    }
    ContainerComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/contact-list',
                name: 'ContactList',
                component: contact_list_component_1.ContactListComponent,
                useAsDefault: true
            },
            {
                path: '/contact/new',
                name: 'ContactFormNew',
                component: contact_form_component_1.ContactFormComponent
            },
            {
                path: '/contact/:id',
                name: 'ContactForm',
                component: contact_form_component_1.ContactFormComponent
            },
            {
                path: '/*other',
                name: 'Other',
                redirectTo: ['ContactList']
            },
        ]),
        core_1.Component({
            selector: 'container',
            templateUrl: "app/templates/container.tpl.html",
            directives: [header_component_1.HeaderComponent, contact_list_component_1.ContactListComponent, contact_form_component_1.ContactFormComponent, router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=container.component.js.map