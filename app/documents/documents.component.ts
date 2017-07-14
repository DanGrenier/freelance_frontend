//We need the OnInit
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document'
import { DocumentService } from './document.service'

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css'],
	providers: [DocumentService]

})

//Implements OnInit
export class DocumentsComponent implements OnInit{
	pageTitle: string = "Document Dashboard"
	//Document array ready to received our documents
	documents: Document[];
	//variable to handle the error message
	errorMessage: string;
	//Let documents component know that this is an observable
	mode = "Observable";

	constructor(
		//Declare a document service variable of type DocumentService
		private documentService: DocumentService
		){}

	//On Init we create an observable timer starting now
	ngOnInit(){
		let timer = Observable.timer(0,5000); // Starts immediately (0) and run every 5 seconds
		timer.subscribe(() => this.getDocuments());} //Instantaneous call
	//This function calls the document service	
	getDocuments(){
		this.documentService.getDocuments()
			.subscribe(
				documents => this.documents = documents,
				error => this.errorMessage = <any>error);
	//subscribe... you will see all the time working with observables
	//its what is actually making the call
	//takes 2 parameters functions
	// documents => (fat arrow function) , this.documents (local) = documents from API
	// error => (fat arrow function), this.errorMessage (local) = any error returned from API
    // this would be the equivalent of
    //.subscribe( function documents {
    //	this.documents = documents} , function error{
    //	this.errorMessage = <any>error})
    }
    })

	}
}