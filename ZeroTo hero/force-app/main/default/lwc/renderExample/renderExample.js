import { LightningElement } from 'lwc';

export default class RenderExample extends LightningElement {
    isHandler=false
     name
    RenderClick(){
        this.isHandler=true
    }

    helloHandler(event){
 
        this.name = event.target.value
    }

    get renderMethod(){

        this.name === 'hello'
        
    }

}