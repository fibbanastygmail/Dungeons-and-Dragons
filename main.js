const container = document.querySelector('#container');

const WDYD = document.createElement('div');
const text1 = `You walk into some grassy plains. You see a forest to the ${getUniqueRandomDirection()[0]}. To the ${getUniqueRandomDirection()[1]} is a tall stone building.`
const text2 = "You are in a forest. Trees are everywhere. You see a pair of shiny eyes in the distance."
const text3 = 'Text3'
const text4 = "Text4"
const contentTextList = [text1, text2, text3, text4]
let contentCount = 0;
let inputCount = 0;

WDYD.classList.add('content');
WDYD.textContent = 'What do you do?';

makeDecision();

function makeDecision(){

    createContentElement();
    container.appendChild(WDYD);
    createUserInputDirection();
    getUserInput().addEventListener('change', makeDecision)

}


function createContentElement(){
    const element = document.createElement('div');
    element.classList.add('content');

    
    for(i=0; i<1000; i++){
        
    
        if(container.contains(document.getElementById('content' + contentCount))){
       {
            element.setAttribute('id','content' + (contentCount+1));
            element.textContent = contentTextList[contentCount + 1];
        }
        }
        else{
            element.setAttribute('id', 'content' + (contentCount));
            element.textContent = contentTextList[contentCount];
        

        }
        contentCount++;
        break;
    }
  
    
    container.appendChild(element);
    
}

function createUserInputDirection(){
    const element = document.createElement('INPUT');
    element.setAttribute('type', 'text')
    element.setAttribute('id', 'direction')

    for(i=0; i<=1000; i++){
        if(container.contains(document.getElementById('input' + inputCount)))
        element.setAttribute('id', 'input' + (inputCount + 1));
        else{
            element.setAttribute('id', 'input' + inputCount);
        }
        inputCount++;
        break;
    }
    
   
    container.appendChild(element);
}

function getUserInput(){
    

    for(i=0; i<10000; i++){
        const myInput = document.getElementById('input' + i);
        if (!myInput.disabled){
            return myInput;
            
        }
    }
}

function getRandomDirection(){
    const directionList = ['north', 'south', 'east', 'west']
    return directionList[Math.floor(Math.random()*directionList.length)]
    
}

function getUniqueRandomDirection(){
     
    
    direction1 = getRandomDirection();
    direction2 = getRandomDirection();
    while(direction1 === direction2){
        direction1 = getRandomDirection();
    }
    return [direction1,direction2];
}







