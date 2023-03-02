import { SurpriseMePrompts } from "../surpriseMe";


const randomPrompt = (arr:{}[])=>{
    let randomNumber = Math.floor(Math.random()* arr.length)
    return arr[randomNumber];
}

export {
    randomPrompt
}