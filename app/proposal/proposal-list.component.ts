import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({ 
moduleId: module.id,
selector: 'proposal-list',
templateUrl: 'proposal-list.component.html',
styleUrls: ['proposal-list.component.css']})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(100, 'Company 1', 'http://portfolio1.com','Ruby on Rails',150,120,15,'user1@domain.com');
    proposalTwo: Proposal = new Proposal(200, 'Company 2', 'http://portfolio2.com','Python',200,120,20,'user2@domain.com');	
    proposalThree: Proposal = new Proposal(300, 'Company 3', 'http://portfolio3.com','Angular2',300,250,20,'user3@domain.com');	

    proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}