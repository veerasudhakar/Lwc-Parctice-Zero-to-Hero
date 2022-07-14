import { LightningElement,track ,api} from 'lwc';

export default class LwcCheckboxValue extends LightningElement {
    @track address={
        village:'dbl',
        country:'india',
        dist:'kurnool'
  
    }
  
    addressHandler(event){
        this.address.village = event.target.value
    }
 

  handleChange(event) {
    let i;
    let checkboxes = this.template.querySelectorAll('[data-id="checkbox"]')
    
    for(i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = event.target.checked;
    }
}

showBool = true;

hide() {

    this.showBool = false;

}

passWord

    showBool

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

}