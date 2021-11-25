const container = document.querySelector('#container');
//const content = document.createElement('div');
//const content2 = document.createElement('div');
//const wdyd=document.createElement('div');
let reset = document.createElement('div');


text1 = ' You walk into some grassy plains. You see a forest to the East. To the north is a tall stone building.'
text2 = "You are in a forest. Trees are everywhere. You see a pair of shiny eyes in the distance."
text3 = 'What do you do?'
text4 = "You approach the building. You see two goblins behind the castle walls."
createContentElement( '',text1);
createContentElement('wdyd',text3);

/*const userInput = document.createElement('INPUT');
userInput.setAttribute('type', 'text')
userInput.setAttribute('id', 'direction')
userInput.setAttribute('id', 'input')*/
createUserInputDirection('userInput', 1);
document.getElementById('input1').addEventListener('change',function(){
    makeDecision('east', 'forest', 'north', 'building' );
});


//container.appendChild(userInput);

function logInput(){
    console.log(userInput.value);
}

function makeDecision(input1, input2, input3, input4){

    //let feedback = document.createElement('div');
    //feedback.textContent = `You head ${input1} towards the ${input2}`
    //feedback.classList.add('content');
   
    
        let str = checkInput('',1, '',2)
        console.log(str);
    
    if (container.contains(reset)){
        container.removeChild(reset);
    }
    
    if ( str.includes(input1) || str.includes(input2) )
    {
        feedbackDirection(input1,input2);
        createContentElement('content2', text2);
        createContentElement('a', text3);
        createUserInputDirection('', 2);
        document.getElementById('input2').addEventListener('change',function(){
            makeDecision('attack', 'charge', 'approach', );
        });
        document.getElementById('input1').disabled = true;

    }
    else if(str.includes(input3) ||str.includes(input4)){
        feedbackDirection(input3,input4);
        createContentElement('content2', text4);
        createContentElement('a', text3);
        createUserInputDirection('', 2);
        document.getElementById('input2').addEventListener('change',function(){
            makeDecision('attack', 'charge', 'approach', );
        });
        document.getElementById('input2').disabled = true;
    }
    else{
       
        reset.classList.add('content');
        reset.classList.add('reset');
        reset.textContent = `That action cannot be performed, would you like to head to the ${input1} or to the ${input3}?"`
        
        container.appendChild(reset);

    }
    
}
function feedbackDirection(input1, input2){
    let feedback = document.createElement('div');
    feedback.classList.add('content');
    feedback.textContent = `You head ${input1} towards the ${input2}`
    
    return container.appendChild(feedback);
}

function checkInput(firstInput,num1, secondInput,num2){
    let str;
    firstInput = document.getElementById('input' + num1)
    secondInput = document.getElementById('input' + num2)
    if(!firstInput.disabled){
        str=firstInput.value;
        
    }
    else{
        str=secondInput.value
        
    }
    return str;
}

function createContentElement(element, text){
    element = document.createElement('div');
    
    element.classList.add('content');
    element.textContent = text;
    container.appendChild(element);
    
}

function createUserInputDirection(name, number){
    name = document.createElement('INPUT');
    name.setAttribute('type', 'text')
    name.setAttribute('id', 'direction')
    name.setAttribute('id', 'input' + number)
   
    container.appendChild(name);
}







