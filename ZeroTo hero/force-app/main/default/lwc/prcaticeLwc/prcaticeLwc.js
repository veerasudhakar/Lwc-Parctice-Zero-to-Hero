import { LightningElement, track } from 'lwc';

export default class PrcaticeLwc extends LightningElement {

    designation="developer"
    Name="veera"
    isVisible=false


    changeHandler(event){

        this.Name = event.target.value

    }

   @track address={
        name:'veera',
        age:24,
        designation:'developer'

    }
    
    trackHandler(event){

        this.address.name=event.target.value
    }
//Getter Method
    users=["veera","ram","lakshman","sainath"]
    num1=20
    num2=30

    get firstuser(){
        return this.users[0]

    }
    get seconduser(){
        return this.users[1]

    }
    get thirduser(){
        return this.users[2]

    }
    get multiply(){
        return this.num1*this.num2
    }

    get add(){
        return this.num1+this.num2
    }

//COnditional Rendering
handleClick(){
    this.isVisible=true
}

movieList=["veera","master","vikram","virat"]
//Iterator
/*
cricketPlayers=[
    {
        id:1,
        captain:"kohli",
        role:batsman
    },
    {
        id:2,
        captain:"dawan",
        role:"allrounder"
    },
    {
        id:3,
        captain:"rohith",
        role:"bowler"

    },
]
*/

ceoList = [
    {
        id:1,
        company:"Google",
        name:"Sundar Pichai"
    },
    {
        id: 2,
        company: "Apple Inc.",
        name: "Tim cook"
    },
    {
        id: 3,
        company: "Facebook",
        name: "Mark Zuckerberg"
    },
    {
        id: 4,
        company: "Amazon",
        name: "Jeff Bezos"
    },
]




}