const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
const atackStats = 1
const defStats= 1
const hpStats = 5
const combatLog = document.getElementById("combat-log")
const form = document.getElementById("hero-form")
const levelUp = document.getElementById("level-up")


var showStatus =  "força:" +atackStats+" defesa:"+ defStats+" Vida:"+hpStats

const showHero = () => {
    const combat = document.createElement('li')
    combat.innerHTML = `${inputHero.value} com status ${showStatus}`
    console.log(combat)
}



form.addEventListener('submit', event => {
    event.preventDefault()

    showHero()

})


const createHero = () => {

}