/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/
/*




function placeImageinDom(data){
    const pElement = document.getElementById("image")
    pElement.src = data.message
    pElement.alt = "ALT"



}

fetch('https://dog.ceo/api/breeds/image/rand')
  .then((response) => response.json())
  .then(placeImageinDom);
*/

/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/
/*
fetch('https://apis.scrimba.com/bored/api/activity').then((response)=>response.json()).then(
    (jsonObject)=> {
        const h1 = document.createElement("h1")
        h1.textContent = jsonObject.activity
        const bodyElement = document.querySelector("body") 
        bodyElement.appendChild(h1)
    }
)
*/
/*
/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API
document.querySelector("button").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((jsonObject) => {
      document.querySelector("h4").textContent = jsonObject.activity;
      document.querySelector("body").classList.add("fun")
    });
});


*/

/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`

   
   fetch("https://apis.scrimba.com/jsonplaceholder/posts")
   .then(res => res.json())
   .then(data => {
       const postsArr = data.slice(0, 5)
       console.log(postsArr)
        const divElement = document.createElement("div")
       divElement.id = "posts"
       document.querySelector("body").appendChild(divElement)
       postsArr.forEach(element => {
           const title = element.title
           const body = element.body
           const h2Element = document.createElement("h2")
           const pElement = document.createElement("p")
           h2Element.textContent = title
           pElement.textContent = body
           divElement.appendChild(h2Element)
           divElement.appendChild(pElement)
           
       } )
    } )
       
 */




/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/

/**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/
/**
 * Challenge:
 * 
 * Check this website for how to change the Content-Type header
 * to indicate that there's JSON in the request body.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 * 
 * Apply that header to our fetch request, send it, and check what comes back.
 * 
 * 
 *  fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })


const postBtn = document.querySelector("button")
const titleElement = document.getElementById("post-title")
const bodyElement = document.getElementById("post-body")
postBtn.addEventListener("click",(event)=>{
    //event.preventDefault()
    let postBody = {
        title: titleElement.value,
        body: bodyElement.value
    }
    console.log(postBody)
}) 

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
 */

/**
 * let postsArray = []

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
        })
})
 */
/**
 * 
 */


 let postsArray = []
 const titleInput = document.getElementById("post-title")
 const bodyInput = document.getElementById("post-body")
 const form = document.getElementById("new-post")
 
 function renderPosts() {
     let html = ""
     for (let post of postsArray) {
         html += `
             <h3>${post.title}</h3>
             <p>${post.body}</p>
             <hr />
         `
     }
     document.getElementById("blog-list").innerHTML = html
 }
 
 fetch("https://apis.scrimba.com/jsonplaceholder/posts")
     .then(res => res.json())
     .then(data => {
         postsArray = data.slice(0, 5)
         renderPosts()
     })
 
 form.addEventListener("submit", function(e) {
     e.preventDefault()
     const postTitle = titleInput.value
     const postBody = bodyInput.value
     const data = {
         title: postTitle,
         body: postBody
     }
     
     const options = {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
             "Content-Type": "application/json"
         }
     }
     
     fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
         .then(res => res.json())
         .then(post => {
             postsArray.unshift(post)
             renderPosts()
             /**
              * Challenge: clear the form out!
              */
             titleInput.value = ""
             bodyInput.value = ""
             // form.reset()
         })
 })

 /**
  * 1. What does it mean for the server to be "Stateless"?
DOes not store the state of the client
* In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:
  
    2. Retrieve a list of all the bikes that are sold?
 get   /bikes/sold


    3. Retrieve detailed information about the bike with an ID of 42?
 get   /bikes/42
    
    4. Update the price of the bike with an ID of 21?
    put /bikes/21 { body }
     
    5. Add a new bike to the list of bikes being sold?
    post /bikes { body {
        
    }}
    
    6. Remove the bike with an ID of 56 from the list of bikes?
    delete /bikes/56
  */

    /*
    1. How is a nested resource URL like /bikes/123/reviews
   different from an endpoint like /reviews?
   /bikes/123/reviews - return an array of reviews about that specific bike
   /reviews - return an array of all reviews on the site
  
2. What URL might you use to GET the review with an ID of 5 on the bike
   with the ID of 123?
   /bikes/123/reviews/5

3. Describe a "URL Parameter" in your own words:
   Variable inside the URL that acts as a placeholder for the real value
   (Oftentimes they replace the ID of the resource)
    */

   /**
    * At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
/bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
/bikeracks?available=true  ==> on the server-side {available: "true"} (Will be parsed as a string)

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
/bikeracks?brand=thule&numBikes=4





/**
 * Challenge part 1: GET the current weather for your city with 
 * the Open Weather API and log it to the console.
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
 * Endpoint: /weather
 * Query: ??? (https://openweathermap.org/current)
    * NOTE: It says you need to include `appid` in your query, but you can skip that this time
    
    
Challenge part 2: change the units into something that makes more sense to you
than Kelvin 😂
 */

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=salt lake city&units=metric")
    .then(res => res.json())
    .then(data => console.log(data))
    
/**

{
	coord: {
		lon: -111.8911,
		lat: 40.7608
	},
	weather: [{
		id: 803,
		main: "Clouds",
		description: "broken clouds",
		icon: "04d"
	}],
	base: "stations",
	main: {
		temp: 299.87,
		feels_like: 299.22,
		temp_min: 295.22,
		temp_max: 303,
		pressure: 1005,
		humidity: 25
	},
	visibility: 10000,
	wind: {
		speed: 2.24,
		deg: 299,
		gust: 4.92
	},
	clouds: {
		all: 75
	},
	dt: 1621458383,
	sys: {
		type: 2,
		id: 2032870,
		country: "US",
		sunrise: 1621425998,
		sunset: 1621478505
	},
	timezone: -21600,
	id: 5780993,
	name: "Salt Lake City",
	cod: 200
}

 */
    

