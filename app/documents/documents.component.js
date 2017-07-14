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
Object.defineProperty(exports, "__esModule", { value: true });
//We need the OnInit
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var document_service_1 = require("./document.service");
var DocumentsComponent = (function () {
    function DocumentsComponent(
        //Declare a document service variable of type DocumentService
        documentService) {
        this.documentService = documentService;
        this.pageTitle = "Document Dashboard";
        //Let documents component know that this is an observable
        this.mode = "Observable";
    }
    //On Init we create an observable timer starting now
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 5000); // Starts immediately (0) and run every 5 seconds
        timer.subscribe(function () { return _this.getDocuments(); });
    }; //Instantaneous call
    //This function calls the document service	
    DocumentsComponent.prototype.getDocuments = function () {
        var _this = this;
        this.documentService.getDocuments()
            .subscribe(function (documents) { return _this.documents = documents; }, function (error) { return _this.errorMessage = error; });
        //subscribe... you will see all the time working with observables
        //its what is actually making the call
        //takes 2 parameters functions
        // documents => (fat arrow function) , this.documents (local) = documents from API
        // error => (fat arrow function), this.errorMessage (local) = any error returned from API
        // this would be the equivalent of
        //.subscribe( function documents {
        //	this.documents = documents} , function error{
        //	this.errorMessage = <any>error})
    };
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css'],
        providers: [document_service_1.DocumentService]
    })
    //Implements OnInit
    ,
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map