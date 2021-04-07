export interface IPokemonProps {
    name: string;
    speed:number;
}

export class Pokemon implements IPokemonProps {
    name: string;
    speed: number;

    constructor(props: IPokemonProps) {
        this.name = props.name;
        this.speed = props.speed;
    }


    
}

