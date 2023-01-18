
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name: "Sha",
    chips: 145,
    hey: function(){
        console.log("hi there")
    }
}
player.hey()

let playerEl = document.getElementById("player-id")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if ( randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0;i < cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: " + sum
    if (sum <= 20){
        message = "Draw?"
    }else if (sum === 21){
        message = "Win"
        hasBlackJack = true
    }else{
        message = "Bye"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
     }

}

function startGame(){
    isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
    renderGame()
}
// let card = [
//     "Hey",
//     "Loo",
//     "sooi",
//     "aloo"
// ]

// for(i=0;i<card.length;i+=1){
//     console.log(card[i])
// }



// function rollDice(){
//     let num = Math.floor(Math.random()*6)+1
//     return num
// }
// console.log(rollDice())

// let hasCompletedCourse = true
// let giveCertificates = true

// if(hasCompletedCourse === true && giveCertificates === true){
//     generateCertificate()
// }
// if(hasCompletedCourse === false && giveCertificates === true){
//     noCertificate()
// }

// function generateCertificate(){
//     console.log("generating certificates...!")
// }
// function noCertificate(){
//     console.log("oops you need to complete the course")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution(){
//     console.log("showing the solution....")
// }

// let likesDocumentaries = false
// let likesStartups = false

// if(likesDocumentaries === false || likesStartups === true){
//     recommendedMovie()
// }

// function recommendedMovie(){
//     console.log("Hey, check out this new films...!")
// }

// let person = {
//     name: "sha",
//     age: 23,
//     country: "india"
// }
// function logData(){
//     console.log(person.name + " " + "is" + person.age + "years old and lives in" + " " + person.country)
// }
// logData()

let age = 15

if (age < 6){
    console.log("Free")
}else if(age < 18){
    console.log("Child discount")
}else if(age <27){
    console.log("Student discount")
}else if(age <67){
    console.log("Full price")
}else{
    console.log("Senior citizen discount")
}

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)
// // for(i = 0;i<largeCountries.length;i++){
//     console.log("- "+largeCountries[i])
// }

// let dayOfMonth = 31 

// let weekday = "Friday"

// if(dayOfMonth === 31 && weekday === "Friday"){
//     console.log("blah")
// }

let hands = ["rock","paper","scissor"]

function select(){
   let randomSelect =Math.floor(Math.random() *3)
    return hands[randomSelect]
}
console.log(select()) 

let fruit = ["apple","orange","apple","orange"]

