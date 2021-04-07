import {Pokemon} from "./models";

export const pokemon1 = new Pokemon({
    name: "Racaillou",
    speed: 45
});

export const pokemon2 = new Pokemon({
    name: "Roucoul",
    speed: 50,

});

 function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }




export function speedTest(p1: Pokemon, p2: Pokemon) {
    if (p1.speed > p2.speed) {
        return p1.name;
    } 

    if (p1.speed < p2.speed) {
        return p2.name;
    } 

    if (p1.speed == p2.speed) {
        const test = getRandomInt(2);
        if(test == 0){
            return p1.name;
        }else{
            return p2.name;
        }


    } 
  


}
 


