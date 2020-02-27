// select the Input Field 
const tipForm = document.querySelector('#form');
const amount = document.querySelector('#bill-amount');
const service = document.querySelector('#service');
const num_people  = document.querySelector('#num-people');
const btnCalc = document.querySelector('#Calculator') ;
const btnRest = document.querySelector('#reset'); 

//tip = (bill / num_people) * quality.
// class calculator 
class TipCalc {
   constructor(num_people ,amount ,service ) {
       this.amount     = amount ;
       this.num_people = num_people ;
       this.service    =  service ;  
   }
   Calculator(){
       const tipCalculator = ( this.amount / this.num_people ) * this.service ;
         return tipCalculator ;
   }
 } 
 // reset the btn after submit 
    btnRest.addEventListener('click', () => {
        tipForm.reset();
    });
     
// function of clac 
tipForm.addEventListener('submit' , e =>{
        e.preventDefault();
        //Instance the clac
        const  tipCalc = new TipCalc(num_people.value , amount.value ,service.value) ; 

        // check the input have a value 
        if(tipCalc.amount == ''){
        alert('plz enter a pill a amount');
        amount.focus();
        }
        else if (tipCalc.num_people == ''){
            alert('plz enter a number of people');
            num_people.focus();
        }
        else if (tipCalc.amount <= 0  || tipCalc.num_people <= 0 || isNaN(parseFloat(tipCalc.amount))||isNaN(parseFloat( tipCalc.num_people))){
                alert('enter corect num');
        }
        else {
            btnCalc.addEventListener('click' , e => {
                const result = tipCalc.Calculator();
                document.querySelector("#result").innerHTML = `
                <div class='result'>
                    <p class='pAmunat'> Tip Amount</p>
                    <p> ${result}</p>
                    <p>Each</>
                    </div>
                `
                // reset the form after submit
                 // e.currentTarget.reset();

        })
    }
})