let jonSnowAttack = 25
let jaimieLannisterAttack = 35

if (jonSnowAttack > jaimieLannisterAttack) {
    console.log("jon snow's attack is greater than jaime's")
} else if (jonSnowAttack === jaimieLannisterAttack) {
    console.log("jon snow and jamie lannister have the same attack")
} else {
    console.log("jaime's attack power is greater than jon snow's")
}

let jonSnowHealth = 100 
let jonSnowDefense = 0 

// let jamieLannisterHealth = undefined
// let jamieLannisterDefense = undefined

if (jaimieLannisterAttack >= jonSnowHealth) {
    console.log("jon snow has been slain")
} else {
    jonSnowHealth -= jaimieLannisterAttack
    console.log(`jon Snow's health is now  ${jonSnowHealth}`)
}

jonSnowDefense += 25

if (jaimieLannisterAttack >= jonSnowDefense) {
    jonSnowHealth -= jaimieLannisterAttack - jonSnowDefense
    console.log(`jon snow's health is ${jonSnowHealth}`)
} else {
    console.log(`jon ded RIP`)
}