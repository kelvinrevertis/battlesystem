const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
const initialStatus = [{str: 1,def: 1,hp: 5}]
const combatLog = document.getElementById("combat-log")
const form = document.getElementById("hero-form")
const levelUp = document.getElementById("level-up")

var showStatus = initialStatus.map(status =>{
    return "força:" + status.str+" defesa:"+ status.def+" Vida:"+ status.hp

})

const showHero =()=>{
    const combat = document.createElement('li')
    combat.innerHTML = `${inputHero.value} com status ${showStatus}`
    console.log(combat)
    
}

const upLevel=()=>{
    let level = showStatus.map(status =>{
        return status.str+10
    })
}

var level = initialStatus.map(status=>{
    return status.str+1, status.def+1, status.hp+1
})

form.addEventListener('submit', event=>{
    event.preventDefault()

    showHero()

})


const createHero =()=>{

}