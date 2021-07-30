
import ReactDom from 'react-dom'
//import MyInfo  from './MyInfo';

import './index.css';

import App from './component/App'
// function MyName(){
//     return (
//         <li>Kaka jugal</li>
//     )
// }
// function MyUnorderedList(){
//     return (<ul>
//     <MyName />
//     <li>
//         Google
//     </li>
//     <li>
//         Senior software engineer
//     </li>
    
// </ul>)
// }
// // The JSX
// ReactDOM.render(<MyUnorderedList />, document.getElementById("root"))

// // The old way 
// var myNewP = document.createElement("p")
// myNewP.innerHTML = "This is a paragraph."


// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).



// function MyInfo(){
//     return (
//         <div class="bio-data">
//             <h1>
//                 Bhuvan
//             </h1>
//             <p>
//                 Freelance contractor
//             </p>
//             <ul>
//                 <li>
//                     Gokarna 
//                 </li>
//                 <li>
//                     Kumta   
//                 </li>
//                 <li>
//                     Chikmagluru
//                 </li>
//             </ul>
//         </div>
//     )
// }

//  ReactDom.render(<GetData/>,document.getElementById("root"))
 //ReactDom.render(<MyInfo/>,document.getElementById("root"))

 // Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component


  ReactDom.render(<App/>,document.getElementById("root"))


