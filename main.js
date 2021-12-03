const container = document.querySelector('#container');


const WDYD = document.createElement('div');
const text1 = `You walk into some grassy plains. You see a forest to the east. To the west is a tall stone building.`
const text2 = "You are in a forest. Trees are everywhere. You see a pair of shiny eyes in the distance."
const text3 = 'Text3'
const text4 = "Text4"
let raceSelected = false;
let classSelected = false;
const contentTextList = [text1, text2, text3, text4]
let contentCount = 0;
let inputCount = 0;
let currentEnemy = "";
let currentEnemyHealth = 0;
let playerWeapon = "sword";
let playerHealth = 10;

const player = {
    race: ['Human', 'Orc', 'Elf', 'Dwarf'],
    class:['Cleric', 'Paladin', 'Ranger', 'Fighter', 'Wizard'],
    profession:['Thief', 'Hermit', 'Priest', 'Warrior',],
    hp: 10,
    armorClass:0,
    strength:0,
    constitution:0,
    wisdom:0,
    intellgence:0,
    charsima:0,


}






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

function enableButton(){
    const raceBtns = document.getElementsByClassName('raceBtn');
    const classBtns = document.getElementsByClassName('classBtn')
    const raceBox = document.getElementById('raceBox');
    const classBox = document.getElementById('classBox');

    for(i=0; i<raceBtns.length;i++){
        
        raceBtns[i].addEventListener('click', function toggleBox() {
            raceBox.style.display = 'none';
            classBox.style.display = 'block';
        });
            
        
       
    }

    for(i=0; i<classBtns.length;i++){
        
        classBtns[i].addEventListener('click', function closeBox() {
            classBox.style.display = 'none';
        });
            
        
       
    }
   
}

function getRaceId(clicked){
    player.race = clicked;
    raceSelected = true;
    console.log(player.race);

}

function getClassId(clicked){
    player.class = clicked;
    classSelected = true;
    console.log(player.class);
    characterFeedback(); // I tried to use two bools and an if statement to make this not have to go in here. So like characheter select function that enables
    // buttons and if class selected then give charachter feedback but it doesn;t work. These are the strange things I do not understand.

}
function characterFeedback(){
    content = document.createElement('div');
    content.textContent = `You are a ${player.race} ${player.class}.`
    container.appendChild(content);
}

enableButton();
