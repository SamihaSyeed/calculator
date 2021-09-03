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
let displayArray=[]

for(let i=9; i>=0; i--){
    let number= document.createElement('button')
    number.innerHTML=i
    keypadDiv.appendChild(number)
    number.setAttribute('class', 'number-btn')
    number.setAttribute('id', 'number'+i)
    let numberBtn = document.querySelector('#number'+i)
    numberBtn.addEventListener('click', ()=>{        
        numberPressed = i
        displayNum.textContent+=numberPressed  
        displayArray.push(numberPressed)     
        
    })
}
let lowerPanelDiv = document.querySelector('.lower-panel')

let clearEl = document.createElement('button')
clearEl.innerHTML = 'C'
lowerPanelDiv.appendChild(clearEl)

clearEl.setAttribute('id', 'clear-btn')
clearEl.classList.add('number-btn', 'lower-panel-btn')

let zeroBtn = document.querySelector('#number'+0)
zeroBtn.classList.add('lower-panel-btn')
lowerPanelDiv.appendChild(zeroBtn)

let decimalPoint = document.createElement('button')
decimalPoint.innerHTML = '.'
lowerPanelDiv.appendChild(decimalPoint)
decimalPoint.classList.add('number-btn', 'lower-panel-btn')
decimalPoint.setAttribute('id', 'decimal-point')


decimalPointBtn = document.querySelector('#decimal-point')




let clearBtn = document.querySelector('#clear-btn')




for(let i=0; i<5; i++){
    let operation= document.createElement('button')
    operation.innerHTML=operationObj[i]
    operationsDiv.appendChild(operation)
    operation.setAttribute('class','operation-btn')
    operation.setAttribute('id', 'operation'+i)
    let operationBtn = document.querySelector('#operation'+i)
    operationBtn.addEventListener('click', ()=>{
        
        calledOperation= operationObj[i]        
                
        
        array.push(displayNum.textContent)
        array.push(calledOperation)
        displayArray.push(calledOperation)
        displayFull.textContent = displayArray.join(' ')
        
        displayNum.textContent=null
        let soln=null
        console.log(array)
        if(array.indexOf('+')!=-1 && array.indexOf('+')!=array.length-1){
            soln=calc['+']()
            if(Math.floor(soln) !== soln){ soln = soln.toFixed(2)}
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
            displayArray.splice(0)
            displayArray.push(soln)   
            displayFull.textContent += displayArray
            displayNum.textContent=soln  
                   
        }

    })
    
}

clearBtn.addEventListener('click', ()=>{
    array=[]
    displayArray=[]
    displayNum.textContent=0
    displayFull.textContent=0
    
    console.log(array)
})

decimalPointBtn.addEventListener('click' , ()=>{
    if(displayArray.indexOf('.') == -1){
    numberPressed='.'
    displayNum.textContent+= numberPressed
    displayArray.push(numberPressed)
    }else{ return displayFull.textContent= 'error'}
})

let firstNum = (operator)=>{ return parseFloat(array[array.indexOf(operator)-1])}
let secondNum = (operator)=>{ return parseFloat(array[array.indexOf(operator)+1]) }

let calc= {
    '+': function(){ return firstNum('+') + secondNum('+')},
    '-': function(){ return firstNum('-') - secondNum('-')},
    '*': function(){ return firstNum('*') * secondNum('*')},
    '/': function(){ return firstNum('/') / secondNum("\/") }    
}




