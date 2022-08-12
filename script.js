const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
const initialStatus = [{ str: 1, def: 1, hp: 5 }]
const combatLog = document.getElementById("combat-log")
const form = document.getElementById("hero-form")
const levelUp = document.getElementById("level-up")
var atack = 1

/*var upStatus = initialStatus.map(status =>{
    return  status*2
})*/

const upLevel = (stats) => {
    console.log(stats)
    stats.str = 2
    stats.def = 2
    stats.hp = 2
}
const upAtack = (status) => {
    status = status+1
    console.log(status)
}
levelUp.addEventListener('click', event =>{
    event.preventDefault()

    upAtack(atack)
})
//console.log(upStatus)

var showStatus = 'força: ' + atackplus
/*var showStatus = initialStatus.map(status =>{
    return "força:" + atack+" defesa:"+ status.def+" Vida:"+ status.hp
})*/

const showHero = () => {
    const combat = document.createElement('li')
    combat.innerHTML = `${inputHero.value} com status ${showStatus}`
    console.log(combat)
    upLevel(showStatus)
}



form.addEventListener('submit', event => {
    event.preventDefault()

    showHero()

})


const createHero = () => {

}