import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    Fullname = "Veeraragavan"
    title = "Anirudh"

    ChangeHandler(event){

        this.title = event.target.value
    }

    @track address={
        city:'Melbourne',
        passcode:3008,
        country:'Australia'

    }

    trackHandler(event){
        this.address.city = event.target.value
    }

    users = ["john","veera","Ram","Lakshman"]
    num1 = 10
    num2 = 30

    get firstuser(){
       return this.users[0]
    }
    get seconduser(){
        return this.users[1]
    }


    get multiply(){
        return this.num1*this.num2
    }

    get addition(){
        return this.num1+this.num2
    }
}