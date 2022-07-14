import { LightningElement , api} from 'lwc';

import FirstName from '@salesforce/schema/Contact.FirstName';

import recordId from '@salesforce/schema/Contact.Id'

export default class Vinod extends LightningElement {

    @api recordId;

    @api objectApiName;
}