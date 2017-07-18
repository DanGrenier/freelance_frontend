This is the frontend (in Angular2) of a freelance application created 
as part of an Angular2/Rails class.

The application lets you browse documents (previously created and stored in a Postgres database)
The documents are called through a Rails API

The proposal section lists previously created proposals and also lets you create a new proposal
As you fill in a freelance work proposal for a client, the preview of the proposal auto-completes (using Angular2 nice features)

Then when you crete the proposal,it calls the Rails API to create the proposal in the Postgres database.