let keypadDiv = document.querySelector('.number-keypad')
let operationsDiv = document.querySelector('.operation-div')
let displayNum = document.querySelector('#display-num')
let displayFull = document.querySelector('#display-operation')
let numberPressed = null
let calledOperation = null

let operationObj = {
    0: '+',
    1: '-',
    2: '*',
    3: '/',
    4: '='
}
let array= []

for(let i=0; i<10; i++){
    let number= document.createElement('button')
    number.innerHTML=i
    keypadDiv.appendChild(number)
    number.setAttribute('class', 'number-btn')
    number.setAttribute('id', 'number'+i)
    let numberBtn = document.querySelector('#number'+i)
    numberBtn.addEventListener('click', ()=>{        
        numberPressed = i
        displayNum.textContent+=numberPressed
        displayFull.textContent+= numberPressed
        
        
    })
}

let clearEl = document.createElement('button')
clearEl.innerHTML = 'C'
keypadDiv.appendChild(clearEl)
let dummy = document.createElement('button')
dummy.innerHTML = 'd'
keypadDiv.appendChild(dummy)
clearEl.setAttribute('id', 'clear-btn')
clearEl.classList.add('number-btn')
dummy.classList.add('number-btn')

let clearBtn = document.querySelector('#clear-btn') 
clearBtn.addEventListener('click', ()=>{
    displayNum.textContent=0
    displayFull.textContent=0
})


for(let i=0; i<5; i++){
    let operation= document.createElement('button')
    operation.innerHTML=operationObj[i]
    operationsDiv.appendChild(operation)
    operation.setAttribute('class','operation-btn')
    operation.setAttribute('id', 'operation'+i)
    let operationBtn = document.querySelector('#operation'+i)
    operationBtn.addEventListener('click', ()=>{
        
        calledOperation= operationObj[i]        
        displayFull.textContent+=calledOperation         
        
        array.push(displayNum.textContent)
        array.push(calledOperation)
        
        displayNum.textContent=null
        let soln=null
        console.log(array)
        if(array.indexOf('+')!=-1 && array.indexOf('+')!=array.length-1){
            soln=calc['+']().toFixed(2)
            if(isFinite(soln)==false){return displayFull.textContent='Error'}
            
            array.splice(0,3, soln)
            if(array.indexOf('=')!=-1){array.splice(array.indexOf('='),1)    
            array= array.filter((item)=>{ return item!=''})}
            console.log(array)
        }
        if(array.indexOf('-')!=-1 && array.indexOf('-')!=array.length-1){
            soln=calc['-']().toFixed(2)
            if(isFinite(soln)==false){return displayFull.textContent='Error'}
            array.splice(0,3, soln)
            if(array.indexOf('=')!=-1){array.splice(array.indexOf('='),1)    
            array= array.filter((item)=>{ return item!=''})}
            console.log(array) 
        }
         if(array.indexOf('*')!=-1 && array.indexOf('*')!=array.length-1){
            soln=calc['*']().toFixed(2)
            if(isFinite(soln)==false){return displayFull.textContent='Error'}
            array.splice(0,3, soln)
            if(array.indexOf('=')!=-1){array.splice(array.indexOf('='),1)    
            array= array.filter((item)=>{ return item!=''})}
            console.log(array) 
        }
         if(array.indexOf('/')!=-1 && array.indexOf('/')!=array.length-1){
            soln=calc['/']().toFixed(2)
        
            if(isFinite(soln)==false){
                displayFull.textContent= "Error." 
                             
            }
            array.splice(0,3, soln)
            if(array.indexOf('=')!=-1){array.splice(array.indexOf('='),1)    
            array= array.filter((item)=>{ return item!=''})}
            console.log(array) 
        }
        if(calledOperation=='='){  
            if(isFinite(soln)==false || soln==null){displayFull.textContent= "Error." }
            array.splice(array.indexOf('='),1)    
            array= array.filter((item)=>{ return item!=''})  
            displayFull.textContent+=soln
            displayNum.textContent=soln            
        }

    })
    
}

let firstNum = (operator)=>{ return parseInt(array[array.indexOf(operator)-1])}
let secondNum = (operator)=>{ return parseInt(array[array.indexOf(operator)+1]) }

let calc= {
    '+': function(){ return firstNum('+') + secondNum('+')},
    '-': function(){ return firstNum('-') - secondNum('-')},
    '*': function(){ return firstNum('*') * secondNum('*')},
    '/': function(){ return firstNum('/') / secondNum("\/") }    
}
