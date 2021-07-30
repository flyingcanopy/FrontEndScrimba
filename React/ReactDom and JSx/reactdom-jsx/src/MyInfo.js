import React from 'react'

/**
 * I guess I am coming late, but this info might be useful to anyone I found out something, which might be simple but important. if you use export on a function directly i.e

export const addPost = (id) =>{
  ...
 }
Note while importing you need to wrap it in curly braces i.e. import {addPost} from '../URL';

But when using export default i.e

const addPost = (id) =>{
  ...
 }
export default addPost,

Then you can import without curly braces i.e. import addPost from '../url';

export default addPost
 */
export  function MyInfo(){
    return (
        <div class="bio-data">
            <h1>
                Akhil
            </h1>
            <p>
                Freelance contractor
            </p>
            <ul>
                <li>
                    Gokarna 
                </li>
                <li>
                    Kumta   
                </li>
                <li>
                    Chikmagluru
                </li>
            </ul>
        </div>
    )
}
 export default function GetData(){
    return (
        <div class="bio-data">
            <h1>
                Bhuvan
            </h1>
            <p>
                Freelance contractor
            </p>
            <ul>
                <li>
                    Gokarna 
                </li>
                <li>
                    Kumta   
                </li>
                <li>
                    Chikmagluru
                </li>
            </ul>
        </div>
    )

}

