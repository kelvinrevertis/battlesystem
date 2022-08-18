const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
const combatLog = document.getElementById("combat-log")
const form = document.getElementById("hero-form")
var atackStats = 1
var defStats= 1
var hpStats = 5

function levelUP(){
    atackStats = atackStats+1
    defStats = defStats+1
    hpStats = hpStats+2
}

const showHero = () => {
    var showStats =  "força:" +atackStats+" defesa:"+ defStats+" Vida:"+hpStats
    const combat = document.createElement('li')
    combat.setAttribute("type","none")
    combat.innerHTML = `Heroi ${inputHero.value} com status ${showStats}`
    combatLog.appendChild(combat)

    createEnemy()  
}

const generateResult = () => Math.round(Math.random()*atackStats)

const createEnemy = ()=>{
    var enemyAtack = 2
    var enemyDef = 0
    var enemyHp = 10
    var showEnemy =  "força:" +enemyAtack+" defesa:"+ enemyDef+" Vida:"+enemyHp
    console.log(showEnemy)

}

function battle(){
    const generateResult = () => Math.round(Math.random()*atackStats)

}

battle()



form.addEventListener('submit', event => {
    event.preventDefault()

    showHero()

})


const createHero = () => {

}