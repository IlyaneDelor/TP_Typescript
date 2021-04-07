export interface IPokemonProps {
    name: string;
    speed:number;
    attack: number;
    defense:number;
    health:number;
    level:number;
}

export class Pokemon implements IPokemonProps {
    name: string;
    speed: number;
    attack:number;
    defense:number;
    health:number;
    level:number;

    constructor(props: IPokemonProps) {
        this.name = props.name;
        this.speed = props.speed;
        this.attack=props.attack;
        this.defense=props.defense;
        this.health=props.health;
        this.level=props.level;
    }


    
}

