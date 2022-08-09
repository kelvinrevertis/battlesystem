const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
const initialStatus = [{str: 1,def: 1,hp: 5}]
const combatLog = document.getElementById("combat-log")
const form = document.getElementById("hero-form")

const showStatus =()=>{
    const combat = document.createElement('li')
    combat.innerHTML = `${inputHero.value} com status ${initialStatus}`
    console.log(combat)
    
}

form.addEventListener('submit', event=>{
    event.preventDefault()

    showStatus()

})


const createHero =()=>{

}