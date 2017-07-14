//Services are Injectables
import { Injectable } from '@angular/core'
//We will require these to process the API call
import { Http, Response, Headers, RequestOptions } from '@angular/http'
//We need Observable that will check for changes 
import { Observable } from 'rxjs/Rx'

import { Document } from './document'
@Injectable()

export class DocumentService{
	//this is our API URL
	private documentsUrl = "http://192.168.5.100:3001/freelance_documents.json";
	constructor(
		//Http variable
		private http: Http) {}

	getDocuments(): Observable<Document[]> {
		return this.http.get(this.documentsUrl)
			.map((response: Response) => <Document[]>response.json())
			.catch(this.handleError);
	}

	 protected handleError (error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}