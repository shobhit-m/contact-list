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
var autogrow_directive_1 = require("../directives/autogrow.directive");
var contact_list_service_1 = require("../services/contact-list.service");
var ContactListComponent = (function () {
    function ContactListComponent(_contactListService) {
        var _this = this;
        this._contactListService = _contactListService;
        this._contactListService.getContactList().subscribe(function (contactList) { return _this.contactList = contactList; }, function (error) { return _this.errorMessage = error; });
    }
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: "app/templates/contact-list.tpl.html",
            styles: ['.search-box { width:180px }'],
            directives: [autogrow_directive_1.AutoGrowDirective],
            providers: [contact_list_service_1.ContactListService]
        }), 
        __metadata('design:paramtypes', [contact_list_service_1.ContactListService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map