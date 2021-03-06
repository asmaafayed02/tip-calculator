// define the selecltor html element
let   billValue = document.getElementById('bill'),
      service = document.getElementById('service'),
      people = document.getElementById('people'),
      submitButton = document.getElementById('button'),
      result = document.getElementById('result'),
      resultSpan = document.getElementById('put');

// hide the result 00.0
result.style.display = 'none';
////First logic with OOP
// define the global or perant class
/*   class Items {
      
         constructor(bill,ser,number){
              this.bill = bill;
              this.ser = ser ;
              this.number = number;
         }
        
        }
        //the child class 
        class Calculater extends Items{
            constructor(bill,ser,number){
               super(bill,ser,number);
                
            }
        //anther logic WITH OOP
        /*  bill
          ser
          number
          constructor(bill,ser,number){
               this.bill = bill;
               this.ser = ser;
               this.number = number;
          }*/
/*
            getInfo(){
               //check the validation
               if(this.bill === ''  ){
                   //the error measage
                    window.alert('please enter the value of  your bill');                    
                   //hide the error measage
                         resultSpan.style.display = 'none';

               }else if (this.number === ''){
                    //the error measage
                    window.alert('please enter the value of people');                    
                   //hide the error measage
                         resultSpan.style.display = 'none';

               }else if (this.bill < 0 || this.number < 0) {
                    //the error measage
                      window.alert(`Please enter only postive numbers, the fields didnot accept negative values`);                    
                    //hide the error measage
                      resultSpan.style.display = 'none';
               }else{
                  
                // calculate the value of amount tip
                let calculateTip = ((this.bill / this.number) * this.ser);
                //for the float numbers
              calculateTip = Math.round(calculateTip * 100) / 100;
               return calculateTip;
                   
            }
          }
        }
  
       
        //claculate when the user click the button
    submitButton.addEventListener('click',(e)=>{
         e.preventDefault();     
        let calc = new Calculater(billValue.value,service.value,people.value);
        let mycalculateTip = calc.getInfo();
          
       // put the result inside html element
         resultSpan.innerHTML = mycalculateTip;
         result.appendChild(resultSpan)
         result.style.display = 'block';

    })*/




//Second logic without OOP

//DEFINE function
function calculateOfTip(){
   //check the validation
   if(billValue.value === ''  ){
          //the error measage
          window.alert('please enter the value of  your bill');                    
          //hide the error measage
                resultSpan.style.display = 'none';

      }else if (people.value === ''){
          //the error measage
          window.alert('please enter the value of people');                    
          //hide the error measage
                resultSpan.style.display = 'none';

      }else if (billValue.value < 0 || people.value < 0) {
          //the error measage
            window.alert(`Please enter only postive numbers, the fields didnot accept negative values`);                    
          //hide the error measage
            resultSpan.style.display = 'none';
      }else{
        
      // calculate the value of amount tip
      let calculateTip = ((billValue.value / people.value) * service.value);
      //for the float numbers
      calculateTip = Math.round(calculateTip * 100) / (100);
      return calculateTip;
      }
}
//claculate when the user click the button
submitButton.addEventListener('click',(e)=>{
  //calling the function 
  e.preventDefault();     
 let resultOfCalculate = calculateOfTip();
   
// put the result inside html element
  resultSpan.innerHTML = resultOfCalculate;
  result.appendChild(resultSpan);
  result.style.display = 'block';

})