import { LightningElement } from 'lwc';

export default class FormOfVeera extends LightningElement {
    showResult=false
    FirstName='Ram'
    title='Ramayan'
    LastName='sudhakar'
    title1='dbl'
    Phone=998966735
    title2='nanna'
    Email='veera@gmail.com'
    client='veera'
    passWord
    showBool
    clickedButtonLabel;

    isVisible = false
    name

    ChangeHandler(event){

        this.title = event.target.value
    }

    LastHandler(event){
this.title1 = event.target.value
    }

    PhoneHandler(event){
        this.title2 = event.target.value
    }

    EmailHandler(event){
this.client = event.target.value
    }

    handleInput(event)

    {

        this.passWord=event.target.value

        if(this.passWord !=='')

        {

            this.showBool=true

        }

        else

        {

            this.showBool=false
        }

    }

    
    handleClick(){
        this.isVisible = true
    }

    changeHandler(event){
        this.name = event.target.value
    }
    handleSaveClick()
    {
       this.showResult=true
    }

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

}