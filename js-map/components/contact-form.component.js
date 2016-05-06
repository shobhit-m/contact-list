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
var router_deprecated_2 = require("@angular/router-deprecated");
var contact_1 = require("../models/contact");
var contact_list_service_1 = require("../services/contact-list.service");
var ContactFormComponent = (function () {
    function ContactFormComponent(_contactListService, _routeParams, _router) {
        this._contactListService = _contactListService;
        this._routeParams = _routeParams;
        this._router = _router;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        if (this._routeParams.get("id")) {
            this.contact = this._contactListService.getContact(this._routeParams.get("id"));
        }
        else {
            this.contact = new contact_1.Contact();
        }
    };
    ContactFormComponent.prototype.onSubmit = function () {
        if (!this.contact.id) {
            this._contactListService.saveContact(this.contact);
        }
        else {
            this._contactListService.updateContact(this.contact);
        }
        this._router.navigate(['ContactList']);
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'contact-form',
            templateUrl: "app/templates/contact-form.tpl.html",
            providers: [contact_list_service_1.ContactListService]
        }), 
        __metadata('design:paramtypes', [contact_list_service_1.ContactListService, router_deprecated_2.RouteParams, router_deprecated_1.Router])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map