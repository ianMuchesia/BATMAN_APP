import { SurpriseMePrompt } from "../@types/surpriseMe";



const randomPrompt = (arr:SurpriseMePrompt[])=>{
    let randomNumber = Math.floor(Math.random()* arr.length)
    return arr[randomNumber];
}

export {
    randomPrompt
}