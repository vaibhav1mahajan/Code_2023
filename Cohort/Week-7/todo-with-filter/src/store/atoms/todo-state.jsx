import {atom} from 'recoil'

 export const todoState = atom({
    key : "todoState",
    default:[{title:'first',description:"first todo"}]
})