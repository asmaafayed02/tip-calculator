// define the selecltor html element
let billValue = document.getElementById('bill').value,
    service = document.getElementById('service').value,
     people = document.getElementById('people').value,
     submitButton = document.getElementById('button'),
     result = document.getElementById('result');

// hide the result 00.0
result.style.display = 'none';
// define the global or perant class
     class items {
         bill
         ser
         number
         constructor(bill,ser,number){
              this.bill = bill;
              this.ser = ser;
              this.number = number;
         }
        
        }
        //the child class 
        class Calculater extends items{
            constructor(bill,ser,number){
                super(bill,ser,number);
                
            }
            getInfo(){
               // check the validation
                if(this.bill === null || this.number === null){
                    window.alert('this field is required')
                   } 
                // calculate the value of amunt tip
                let calculateTip = ((this.bill * this.number) / this.ser);
                //for the float numbers
                calculateTip = Math.round(calculateTip * 100) / 100;
                //show the result
                result.style.display = 'block';
                // put the result inside html element
                result.innerText = calculateTip;
                   
            }
        }
        
        
        //claculate when the user click the button
    submitButton.addEventListener('click',(e)=>{
         e.preventDefault();
        let calc = new Calculater(billValue,service,people);
        calc.getInfo()
       
    })