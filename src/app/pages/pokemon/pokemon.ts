import { Attack } from "./attack";
import { Zone } from "./zone";

export class Pokemon {
    nom: string;
    desc: string;
    types: string[];
    attacks: Attack[];
    zone : Zone;

    constructor(nom : string, desc : string, types : string[], attacks : Attack[], zone : Zone) {
        this.nom = nom;
        this.desc = desc;
        this.types = types;
        this.attacks = attacks;
        this.zone = zone;
    }

    addType(type : string) {
        if (this.types.length < Pokemon.maxType) {
            this.types.push(type);
        }
    }

    addAttack(attack : Attack) : boolean {
        if (this.attacks.length < Pokemon.maxAttack) {
            this.attacks.push(attack);
            return true;
        }
        return false;
    }

    static get maxType() {
        return 2;
    }

    static get maxAttack() {
        return 4;
    }
}