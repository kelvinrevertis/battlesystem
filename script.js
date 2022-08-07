const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
const initialStatus = [{str: 1,def: 1,hp: 5}]
const combatLog = document.getElementById("combat-log")

const showStatus =()=>{
    const combat = document.createElement('li')
    combat.innerText = `${inputHero} com status ${initialStatus}`
    combatLog = combat
    
}

const createHero =()=>{

}