const container = document.querySelector('#container');

const WDYD = document.createElement('div');
const text1 = `You walk into some grassy plains. You see a forest to the east. To the west is a tall stone building.`
const text2 = "You are in a forest. Trees are everywhere. You see a pair of shiny eyes in the distance."
const text3 = 'Text3'
const text4 = "Text4"
const contentTextList = [text1, text2, text3, text4]
let contentCount = 0;
let inputCount = 0;
let currentEnemy = "";
let currentEnemyHealth = 0;
let playerWeapon = "sword";
let playerHealth = 10;
const commonEnemy = {
    type: ["Goblin", "Witch", "Skeleton", "Slime", "Bat", "Ant", "Boar"],
    mod: ["Red", "Dark", "Blood", "Hearty", "Ancient", "Corrupted", "Tainted", "Clever"],
    hp: 10,
    dmg: 2,
    createEnemy : function() {
        currentEnemyHealth = this.hp;
        return `${this.mod[Math.floor(Math.random()*(commonEnemy.mod.length - 1))]} ${this.type[Math.floor(Math.random()*(commonEnemy.type.length - 1))]}`
    },
    createEnemyDescription : function() {
        currentEnemyHealth = this.hp;
        const enemyText = document.createElement('div');
        enemyText.classList.add('content');
        enemyText.textContent = (`You have encountered a ${this.createEnemy()}. They have ${this.hp} hitpoints and can attack you for ${this.dmg} hitpoints.`)
        container.appendChild(enemyText);
    }
}
const randomDungeonRoom = {
    timeOfDay: ["Goblin", "Witch", "Skeleton", "Slime", "Bat", "Ant", "Boar", "Snake", "Gecko"],
    adjective: ["Damp", "Dark", "", "Hearty", "Ancient", "Corrupted", "Tainted", "Clever"],
    preposition: ["in the corner", "against the wall", "to your left", "to your right", "on your flank"],
    object: ["wooden wheelbarrow", "table", "chair", "large wheel", "rusty chains", "pile of bones"],
    hp: 10,
    dmg: 2,
    createEnemy : function() {
        return `${this.mod[Math.floor(Math.random()*(commonEnemy.mod.length - 1))]} ${this.type[Math.floor(Math.random()*(commonEnemy.type.length - 1))]}`
    },
    createEnemyDescription : function() {
        const enemyText = document.createElement('div');
        enemyText.classList.add('content');
        enemyText.textContent = (`You have encountered a ${this.createEnemy()}. They have ${this.hp} hitpoints and can attack you for ${this.dmg} hitpoints.`)
        container.appendChild(enemyText);
    }
}
WDYD.classList.add('content');
WDYD.textContent = 'What do you do?';
createContentElement();
container.appendChild(WDYD);
createUserInputDirection();
getUserInput().addEventListener('change', makeDecision)

function makeDecision(){
    if (currentEnemy === ""){
        currentEnemy = commonEnemy.createEnemy();
        console.log(currentEnemy);
    }
    else {
        console.log("its else");
        console.log(currentEnemy);
    }
    battle()
    randomNum = Math.floor(Math.random()*100)
    //currentArea = areaList[0]
    createContentElement();
    container.appendChild(WDYD);
    createUserInputDirection();
    getUserInput().addEventListener('change', makeDecision)
    getUserInput().disabled = true
    getUserInput().addEventListener('change', makeDecision)
    console.log(`${randomNum}`)
}

function battle() {
    createBattleElement(`The ${currentEnemy} readies their attack.`)
    createBattleElement(`You attempt to block their attack.`)
    createBattleElement(`You ready your ${playerWeapon} and attempt to attack the ${currentEnemy}.`)
    console.log(playerHealth)
    console.log(currentEnemyHealth)
    while ((currentEnemyHealth > 0) && (playerHealth > 0)) {
        console.log("made it in")
        enemyAttack = Math.floor(Math.random()*4 + 1)
        playerBlock = Math.floor(Math.random()*2 + 1)
        if (enemyAttack > 0) {
            createBattleElement(`The enemy attempts to strike you for ${enemyAttack} hitpoints!`)
            createPlayerElement(`You block ${playerBlock} damage from their attack!`)
            playerHealth = playerHealth - (enemyAttack - playerBlock)
        }
        else {    
            createBattleElement(`The ${currentEnemy} missed their attack. Go for a counterstrike!`)
        }
    }
    console.log(playerHealth)
    console.log(currentEnemyHealth)
    if (currentEnemyHealth <= 0) {
        createBattleElement(`You have defeated the ${currentEnemy}!`)
        currentEnemy = "";
    }
    else if (playerHealth <= 0) {
        console.log("made it into defeat")
        createBattleElement(`You have been defeated.`)
        playerHealth = 10
    }
}
function createBattleElement(text){
    battleText = document.createElement('div');
    battleText.classList.add('content');
    battleText.textContent = text;
    if (!container.contains(battleText)) {
        container.appendChild(battleText);
    }
    else {
        container.replaceChild(battleText);
    }
} 
function createEnemyElement(text){
        battleText = document.createElement('div');
        battleText.classList.add('content');
        battleText.textContent = text;
        if (!container.contains(battleText)) {
            container.appendChild(battleText);
        }
        else {
            container.replaceChild(battleText);
        }
    }
function createPlayerElement(text){
        battleText = document.createElement('div');
        battleText.classList.add('content');
        battleText.textContent = text;
        if (!container.contains(battleText)) {
            container.appendChild(battleText);
        }
        else {
            container.replaceChild(battleText);
        }
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
    if (direction1 === direction2){
        direction1 = getRandomDirection();
    }
    else
    return [direction1,direction2];
}







