import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Proposal} from './proposal';
import {Observable} from 'rxjs/Rx';
import {ProposalService} from './proposal.service';


@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html',
	styleUrls: ['proposal-show.component.css']

})
export class ProposalShowComponent implements OnInit{
	id: number;
	routeId: any;

	constructor(
	  private route: ActivatedRoute,
	  private proposalService: ProposalService,
	  private http: Http
	) {}

	@Input()
	proposal: Proposal;

	ngOnInit(): void {
		let proposalRequest = this.route.params
		.flatMap((params: Params) =>
		this.proposalService.getProposal(+params['id']));
		proposalRequest.subscribe(response => this.proposal = response.json());	
	  
		}
	 
	
}