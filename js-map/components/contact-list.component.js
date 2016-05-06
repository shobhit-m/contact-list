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
var contact_list_service_1 = require("../services/contact-list.service");
var search_pipe_1 = require("../pipes/search.pipe");
var ContactListComponent = (function () {
    function ContactListComponent(_contactListService) {
        this._contactListService = _contactListService;
        this.searchText = "";
        this.contactList = _contactListService.getContactList();
    }
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: "app/templates/contact-list.tpl.html",
            providers: [contact_list_service_1.ContactListService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            pipes: [search_pipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [contact_list_service_1.ContactListService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map