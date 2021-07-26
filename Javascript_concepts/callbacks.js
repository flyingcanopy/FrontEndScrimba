function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/", function(response){
        console.log("I Got the data and generated response object")
        // the response object has  method response.json() which accepts a function that accepts JsonObject as a argument.. We pass what we want to do.
        response.json(function(data) {
            console.log(data)
            // Do co
        })
    })
        // .then(res => res.json())
        // .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gimmeThePets(number) {
//     return person.hasPet
// }

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function filterArray(array, callback) {
//     const resultingArray = []
//     // Write your filtering logic here
//     for (let item of array) {
//         const shouldBeIncluded = callback(item)
//         if (shouldBeIncluded) {
//             resultingArray.push(item)
//         }
//     }
//     return resultingArray
// }

/**
 * Challenge: Use your filter array method!
 * Given the above `people` array, return a new array with only people where `hasPet` is true
 * Note: Remember that your callback function will be given the individual item in the array for a parameter
 */

// const peopleWithPets = filterArray(people, function(person) {
//     return person.hasPet
// })

// console.log(peopleWithPets)

/**
 * # Resolved promises quiz

1. What is a promise (in your own words)?
A promise that an operation that normally takes a bit of time
will eventually finish running. I.O.U. (I owe you)

2. Which part of the code we have so far is a promise?
The fetch request returns a promise object.

3. What are the three states a promise can be in?
(1) Pending, (2) Resolved (fulfilled), (3) Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?
The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a
   promise is resolved?
.then() method

?? - How do we handle a promise that has been rejec
 */
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

/**
 * Challenge: log the current time to the console, formatted
 * like this:
 * 
 * 1:30 PM
 * 
 * Use Google and Stack Overflow to find the best way.
 * 
 * Good luck! 👍
 */
function updateTime() {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata').then((response)=>response.json()).then((data)=>{
    const date = new Date(data.datetime)
    console.log(data)
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
    document.querySelector(".time").textContent = date.toLocaleTimeString()
})
    
}
updateTime()
setInterval(updateTime,60000);