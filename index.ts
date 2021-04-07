import {Pokemon,Move} from "./models";

export const pokemon1 = new Pokemon({
    name: "Racaillou",
    level:5,
    health:23,
    attack: 17,
    defense: 19,
    speed: 11
});

export const pokemon2 = new Pokemon({
    name: "Roucoul",
    level:6,
    health:23,
    attack:14,
    defense:13,
    speed: 15

});


export const Charge = new Move({
    name:"Charge",
    power:10,
    accuracy:100

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


    export function attackPokemon(p1:Pokemon,p2:Pokemon,move:Move){
        const dmg = ((((p1.level * 2 / 5)+2) * p1.attack * move.power /  p2.defense) /50) +2 ;
        console.log(Math.round(p2.health - dmg));

        return Math.round(p2.health - dmg);
    }


  attackPokemon(pokemon1,pokemon2,Charge);
  
  



 


