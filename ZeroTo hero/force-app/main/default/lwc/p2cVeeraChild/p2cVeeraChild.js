import { LightningElement, api } from 'lwc';

export default class P2cVeeraChild extends LightningElement {
 
    @api name
    @api bikelist
    @api number
    @api message
}