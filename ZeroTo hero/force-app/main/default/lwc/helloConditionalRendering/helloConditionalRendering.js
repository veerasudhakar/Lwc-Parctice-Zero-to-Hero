import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name
    ishandler = false
    handleClick(){
        this.isVisible = true
    }
    RenderClick(){
        this.ishandler = true
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello'
    }

}