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
export const pokemon3 = new Pokemon({
    name: "Magicarpe Doré",
    level:100,
    health:1000,
    attack:1000,
    defense:5,
    speed: 1000

});




export const Charge = new Move({
    name:"Charge",
    power:30,
    accuracy:100

});

export const Trempette = new Move({
    name:"Trempette",
    power:1000000,
    accuracy:0

});

export const  superTackle = new Move({
    name:"SuperTackle",
    power:60,
    accuracy:65
});





 function  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }


export async function speedTest(p1: Pokemon, p2: Pokemon) {
    if (p1.speed > p2.speed) {
        return p1;
    } 

    if (p1.speed < p2.speed) {
        return p2;
    } 

    if (p1.speed == p2.speed) {
        const test = getRandomInt(2);
        if(test == 0){
            return p1;
        }else{
            return p2;
        }


    }
} 





    export async function attackPokemon(p1:Pokemon,p2:Pokemon,move:Move) {
        
        
        const dmg = ((((p1.level * 2 / 5)+2) * p1.attack * move.power /  p2.defense) /50) +2 ;
        if(getRandomInt(101) > move.accuracy){
            console.log("Miss");

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(p2.health);
                }, 1000);
            });

            
        }
        
        p2.health = Math.round(p2.health - dmg);
        console.log(p1.name + " attack" + move.name + " ! And did " + Math.round(dmg) + " Damage");
        
     
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(p2.health);
            }, 1000);
        });
        
    }

    export async  function alive(p1:Pokemon){
        if(p1.health <0 ){
            return false;
        }else{
            return true;
            
        }
    }


    export function Win(p1:Pokemon,p2:Pokemon){
        if (p1.health <= 0){
            return p2;
        }
        return p1;

    }

    export async  function aliveBoth(p1:Pokemon,p2:Pokemon){

        
        if((p1.health > 0 ) && (p2.health > 0)) {
            return true;
        }
        return false;
    }
    


    export async function figth(p1:Pokemon,p2:Pokemon){
        while (await aliveBoth(p1,p2) == true) {
            if(await speedTest(p1,p2) == p1){
              await attackPokemon(p1,p2,Charge)
              
               await attackPokemon(p2,p1,Charge);
            }else{
               await attackPokemon(p2,p1,Charge);
                await attackPokemon(p1,p2,Charge);
            }

        }
            return Win(p1,p2);
    }
    











   // attackPokemon(pokemon1,pokemon2,Charge);


    


 



 


