import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {
    name='veera'
    title='sudhakar'

    changeHandler(event){

        this.title=event.target.value

    }

    @track address={

        name:'veera',
        city:'Banglore',
        passcode:2334
    }

    trackHandler(event){

        this.address.name=event.target.value
    }
}