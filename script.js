const btnStatus = document.getElementById("button-status")
const inputHero = document.getElementById("hero-name")
var atackStats = 1
var defStats= 1
var hpStats = 5
const combatLog = document.getElementById("combat-log")
const form = document.getElementById("hero-form")


function levelUP(){
    atackStats = atackStats+1
    defStats = defStats+1
    hpStats = hpStats+2
}

const showHero = () => {
    var showStatus =  "força:" +atackStats+" defesa:"+ defStats+" Vida:"+hpStats
    const combat = document.createElement('li')
    combat.setAttribute("type","none")
    combat.innerHTML = `Heroi ${inputHero.value} com status ${showStatus}`
    console.log(combat)
    combatLog.appendChild(combat)


}



form.addEventListener('submit', event => {
    event.preventDefault()

    showHero()

})


const createHero = () => {

}